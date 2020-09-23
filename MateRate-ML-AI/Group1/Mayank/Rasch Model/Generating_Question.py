# Generating skill based data structure using random and storing it
# in a file that will act as question bank

import numpy as np

arr = np.random.randint(1, 101, 1000)

np.savetxt('question.txt', arr)
