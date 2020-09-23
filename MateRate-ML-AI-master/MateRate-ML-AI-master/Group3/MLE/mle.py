
import numpy as np
import tensorflow.compat.v1 as tf
tf.disable_v2_behavior()

class MLE:

	def __init__(self,num_param=3):
		if num_param not in [1,2,3]:
			raise ValueError("Choose number of parameters from [1,2,3]. (Default: 3)")

		self.NUM_PARAM = num_param
		self.D = 1.7

		if num_param == 3:
			self.P = lambda theta,b,a,c: tf.sigmoid(c) + (1-tf.sigmoid(c))*tf.sigmoid(self.D*a*(theta-b))
		elif num_param == 2:
			self.P = lambda theta,b,a,c: tf.sigmoid(self.D*a*(theta-b))
		elif num_param == 1:
			self.P = lambda theta,b,a,c: tf.sigmoid(self.D*(theta-b))

		self.b,self.a,self.c = None,None,None



	def train(self,X,max_iter=2500,loss='rms'):
		if loss not in ['rms','binary']:
			raise ValueError("Loss function should belong to ['rms','binary']")

		# Normalising factor
		B = np.sum(X,axis=0,keepdims=True)
		B = (B-np.mean(B))/np.std(B)

		
		b = tf.constant(np.ones(B.shape),dtype=tf.float64)
		a = tf.constant(np.ones(B.shape),dtype=tf.float64)
		c = 3.14*(tf.constant(np.random.random(B.shape),dtype=tf.float64)-1)

		theta = tf.Variable( np.mean(X,axis=1,keepdims=True) ,dtype=tf.float64)

		j = tf.math.sqrt(tf.reduce_mean((X-self.P(theta,b,a,c))**2))

		if loss == 'binary':
			j = -tf.reduce_sum(X*tf.log(self.P(theta,b,a,c)) + (1-X)*tf.log(1-self.P(theta,b,a,c)))
		
		train=tf.train.AdamOptimizer().minimize(j)

		with tf.Session() as session:
			session.run(tf.global_variables_initializer())

			for i in range(max_iter):
				session.run(train)
			
			#print(session.run(theta))
			theta = session.run(theta)



		theta = tf.constant(theta,tf.float64)

		b = tf.Variable(np.ones(B.shape),dtype=tf.float64)
		a = tf.Variable(np.ones(B.shape),dtype=tf.float64)
		c = 3.14*(tf.Variable(np.random.random(B.shape),dtype=tf.float64)-1)
		
		j = tf.math.sqrt(tf.reduce_mean((X-self.P(theta,b,a,c))**2))

		if loss == 'binary':
			j = -tf.reduce_sum(X*tf.log(self.P(theta,b,a,c)) + (1-X)*tf.log(1-self.P(theta,b,a,c)))

		train=tf.train.AdamOptimizer().minimize(j)

		with tf.Session() as session:
			session.run(tf.global_variables_initializer())

			for i in range(max_iter):
				session.run(train)

			#print(session.run(b),session.run(a),session.run(c))

			self.b = session.run(b)
			self.a = session.run(a)
			self.c = session.run(c)


	def predict(self,X,train_theta_for=20,max_iter=2500,loss='rms',echo_metrics=True):
		if self.b is None:
			raise Exception("Model has not been trained yet.\n\tTip: Use model.train(train_inp) to train the model first.")

		if loss not in ['rms','binary']:
			raise ValueError("Loss function should belong to ['rms','binary']")

		if train_theta_for >= X.shape[1]:
			raise ValueError("You must choose a value lesser than number of items")

		b = tf.constant(self.b,dtype=tf.float64)
		a = tf.constant(self.a,dtype=tf.float64)
		c = tf.constant(self.c,dtype=tf.float64)

		X_train = tf.constant(X[:,:train_theta_for],dtype=tf.float64)

		theta = tf.Variable( np.mean(X[:,:train_theta_for],axis=1,keepdims=True) ,dtype=tf.float64)

		j = tf.math.sqrt(tf.reduce_mean((X-self.P(theta,b,a,c))**2))
		
		if loss == "binary":
			j = -tf.reduce_sum(X*tf.log(self.P(theta,b,a,c)) + (1-X)*tf.log(1-self.P(theta,b,a,c)))

		train=tf.train.AdamOptimizer().minimize(j)

		with tf.Session() as session:
			session.run(tf.global_variables_initializer())

			for i in range(max_iter):
				session.run(train)

			res = session.run(self.P(theta,b[:,train_theta_for:],a[:,train_theta_for:],c[:,train_theta_for:]))

			res = np.round(res)

			#print(res)

			acc =np.mean(res==X[:,train_theta_for:])
			prec = np.sum((res==X[:,train_theta_for:])*(res==np.ones(res.shape)))/np.sum(res)
			rec = np.sum((res==X[:,train_theta_for:])*(res==np.ones(res.shape)))/np.sum(X[:,train_theta_for:])
			
			if echo_metrics:
				print("Accuracy:\t{}\nPrecision:\t{}\nRecall:\t\t{}\nF1 score:\t{}".format(acc,prec,rec,2*prec*rec/(prec+rec)))

			return res,(acc,prec,rec,2*prec*rec/(prec+rec))


if __name__ == "__main__":		 

	X = np.load('data/Class3_final.npy')

	model = MLE(3)
	model.train(X[:700,:],max_iter=3000,loss="rms")
	res,metrics = model.predict(X[700:,:],train_theta_for=30,max_iter=3000,loss="rms",echo_metrics=True)
	