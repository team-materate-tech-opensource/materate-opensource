# I am writing the code keeping the assumption that I am testing only one student for each execution of the code

import random
import numpy as np
import functions as f
import matplotlib.pyplot as plt

# Loading the questions with various difficulty level
ques = np.loadtxt("question.txt")
ques = ques.reshape(len(ques), 2)

quescol = np.zeros([len(ques), 1])
ques = np.append(ques, quescol, 1)

# Assigning Difficulty level of the student so we can check if the rating determined by the CAT is accurate or not
D_child = 70

T = 65          # Passing criteria of the exam 

B = 0           # Estimate of the student ability 
S = 0           # Error estimate of the student's measured ability
D = 0           # Difficulty of the question 
L = 0           # Total number of question asked in the exam 
H = 0           # Total difficulty of question asked in the exam
R = 0           # Total number of question answered correctly
Plist = []      # List to calculate the Probability to answer a question right

# Different list for making different graphs 
Hlist = []
Qlist = []
Anslist = []
Blist = []
Slist = []
Dlist = []

# Question with difficulty level D and error less than 2 will be choosen
error = 2
counter = 0

D = 20
B = 25

while(True):
    counter = counter + 1

    # Ensuring that the question around the difficulty D is selected and previously asked question is not asked again
    for row in ques:
        if(D-error <= row[0] and row[0] <= D+error  and row[1] == 0):
            D = row[0]
            row[1] = 1
            break
    
    L = L + 1
    H = H + D

    # ans is in format of true)(1) or false(0)
    ans = f.Prob_ans(D_child, D)
    
    P_i = f.Model_Prob(B, D)
    Plist.append(P_i)

    # Updates the difficulty of next question and increment the value of R if the answer is correct
    D, R = f.Question_Selection(D, L, ans, R)
    W = L - R
    # D = B

    B = f.Estimate_Measure2(B, R, Plist)
    S = f.Estimate_Error2(Plist)
    
    # Updating different list to make the graphs
    Hlist.append(H)
    Qlist.append(L)
    Anslist.append(ans)
    Dlist.append(D)
    Blist.append(B)
    Slist.append(S)

    # Atleast 15 question must be answered by the student before we can decided on if his/her result
    if(counter >= 5 and L > 14):
        counter = 0
        if(S < 0.5):
            if(B<T):
                print("Sorry you failed your exam")
            else:
                print("Congratulations you have passed the exam")
    
    # Upper limit on number of question is 30
    if(L > 29 ):
        break


print("Measure of student Ability is: ", B)
print("Error in measure is: ", S)

# print(Plist)
# plt.plot(Qlist, Hlist, label = "Hlist")
# plt.plot(Qlist, Anslist, label = "Anslist")
# plt.plot(Qlist, Dlist, label = "Dlist")
# plt.plot(Qlist, Blist, label = "Blist")
plt.plot(Qlist, Slist, label = "Slist")
# plt.plot(Blist, Hlist, label = "Testing")
plt.xlabel('Question Number')
plt.ylabel('Difficulty Level')

plt.legend()
plt.title('First Graph')

plt.show()
