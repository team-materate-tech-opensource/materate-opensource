import numpy as np
import MLE

X_train = np.load('path/to/train_data.npy')
X_test = np.load('path/to/test_data.npy')

model = MLE(num_param=3)
model.train(X_train,max_iter=2008,loss='rms')
res,metrics = model.predict(X_test,train_theta_for=20,max_iter=2008,loss="rms",echo_metrics=True)
