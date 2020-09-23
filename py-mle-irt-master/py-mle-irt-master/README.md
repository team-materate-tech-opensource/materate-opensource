 # py-mle-irt

Implementation of Maximum Likelihood Estimator (MLE) to obtain student's ability and item parameters and hence predict his/her responses in other questions using *Item Response Theory (IRT)*

## Introduction
This is the implementation of MLE using IRT. This code uses a *logistic* probability function, with the student parameters `theta` for ability and item parameters `b`, `a`, `c` for item difficulty, discrimination factor and guess probability respectively. The 1-paramter models uses only one item paramter `b`, 2-paramater model uses `b` and `a` while 3-parameter model uses all `b`, `a` and `c`. 

Ideally, the values of `theta` and `b` can be any number, `a` would be a positive number and `c` (a probability) would lie between 0 and 1. However, the value of `c` didn't lie within the required range; so the `c` was replaced with `sigmoid(c)` to force the value between 0 and 1 in 3-parameter model *(this means there is a slight deviation in how probability is computed when compared to the actual article)*.



## Requirements
Two packages `numpy` and `tensorflow` are required which can be installed directly using `pip` with the following line in Terminal:

```
pip install -r requirements.txt
```

## Sample code

#### 0. Import
The implementation is wrapped in a class in `MLE.py`. To use it, you need to import it first 
```python
from MLE import MLE
```

### 1. Initialise
The model has to be initialised with the number of parameters that are required for each item using `num_param` which is either 1, 2 or 3 (3 by default). For example,
```python
model = MLE(num_param=3)
```
### 2. Train

To train the model, use `train()` method. Note that the input must be an array of type `numpy`. The items are stored along the columns and each student details along the row. If there are 10 students with 2 items, the shape of the array must be (10,2). Each entry should be a binary number (0 for not answered and 1 for answered).

**Other optional parameters**
- `max_iter` : the number of iterations in the optimiser [Default: 2500]
- `loss` : The loss function to use (either 'rms' : Root Mean Square or 'binary': Binary logarithmic loss) [Default: 'rms']

To train,
```python
model.train(X_train,max_iter=2008,loss='rms')
```

### 3. Predict

To predict, you need to input the test set along with `train_theta_for` parameter *(value less than number of items)* which states number of items to be used for predicting each student's ability before predicting his/her response. *Though a default value is provided, it is highly recommended to choose a different value depending on number of items in the dataset and pass it during the method call.* 

**Other optional parameters**
- `max_iter` : the number of iterations in the optimiser [Default: 2500]
- `loss` : The loss function to use (either 'rms' : Root Mean Square or 'binary': Binary logarithmic loss) [Default: 'rms']
- `echo_metrics` : Whether to print the metric results (like accuracy, F1 score) [Default: True]

The method returns the predicted result (`res`) and a tuple of metric values in the order accuracy, Precision, Recall, F1 score). *Note that the shape of `res` would be (`NUM_STUDENTS_IN_TEST`,`NUM_ITEMS`-`train_theta_for`).*

**See [sample.py](sample.py) for a sample code**

#### Note
- Adam optimiser is used for optimising
- A normal function can be used for probability function (may be added soon)
- The shape of student parameter `theta` will be of the form `(NUM_STUDENTS,1)` and item paramters `b` (`a` and `c`) will be of the form `(1,NUM_ITEMS)`
- The trained item parameters can be obtained using their names, e.g., `model.b` to obtain `b`
- A good threshold for best results in hard-max classification was found to lie between *0.4* and *0.6* with dataset used and hence, *0.5* was chosen
- `D` is a scaling factor, whose value is *1.7*


*More information about the architecture will be updated later*

---
***The dataset used, results obtained and analysis done with the results cannot be shared because of NDA with the company for which this was implemented***
