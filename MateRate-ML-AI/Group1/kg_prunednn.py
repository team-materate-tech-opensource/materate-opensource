import tensorflow as tf
import numpy as np
from tensorflow import keras

train_stuSkills=[32,81,43,55,61] #estimated student skills (obtained from the adaptive test), and the actual student skills for the LOs.
test_stuSkills=[32,81,43,55,61]
train_labels=[81,56,77,22,91]
test_labels=[81,56,77,22,91]


train_stuSkills=np.array(train_stuSkills, dtype=np.float32)
train_stuSkills=train_stuSkills/100.0
test_stuSkills=np.array(test_stuSkills, dtype=np.float32)
test_stuSkills=test_stuSkills/100.0

model=keras.Sequential([
    keras.layers.InputLayer(input_shape=(1,5)),
    keras.layers.Dense(7),
    keras.layers.Dense(4),
    keras.layers.Dense(6),
    keras.layers.Dense(5)
])

model.compile(optimizer='adam',
              loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
              metrics=['accuracy'])

model.fit(
  train_stuSkills,
  train_labels,
  epochs=5
)

_, baseline_model_accuracy = model.evaluate(
    test_stuSkills, test_labels, verbose=0)

_, keras_file = tempfile.mkstemp('.h5')
tf.keras.models.save_model(model, keras_file, include_optimizer=False)

import tensorflow_model_optimization as tfmot

prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude

# Compute end step to finish pruning after 2 epochs.
batch_size = 16
epochs = 2
validation_split = 0.1 # 10% of training set will be used for validation set. 

num = train_stuSkills.shape[0] * (1 - validation_split)
end_step = np.ceil(num/ batch_size).astype(np.int32) * epochs

# Define model for pruning.
pruning_params = {
      'pruning_schedule': tfmot.sparsity.keras.PolynomialDecay(initial_sparsity=0.60,
                                                               final_sparsity=0.95,
                                                               begin_step=0,
                                                               end_step=end_step)
}
model_for_pruning = prune_low_magnitude(model, **pruning_params)
# `prune_low_magnitude` requires a recompile.
model_for_pruning.compile(optimizer='adam',
              loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
              metrics=['accuracy'])

model_for_pruning.summary()

#training the pruned model
logdir = tempfile.mkdtemp()
callbacks = [
  tfmot.sparsity.keras.UpdatePruningStep(),
  tfmot.sparsity.keras.PruningSummaries(log_dir=logdir),
]
  
model_for_pruning.fit(train_images, train_labels,
                  batch_size=batch_size, epochs=epochs, validation_split=validation_split,
                  callbacks=callbacks)

#comparing th epruned model to the baseline(non-pruned model)
_, model_for_pruning_accuracy = model_for_pruning.evaluate(
   test_images, test_labels, verbose=0)

print('Baseline test accuracy:', baseline_model_accuracy) 
print('Pruned test accuracy:', model_for_pruning_accuracy)