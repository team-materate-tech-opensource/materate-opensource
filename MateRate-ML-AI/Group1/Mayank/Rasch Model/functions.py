import numpy as np
import random
import math

# Determing the question based on given difficulty
# def Question(ques, D, error):
#     for row in ques:
#         if(D-error <= row and row <= D+error):
#             D = row
#             break

#     return D

# Determing the model probability to solve a question based on the current estimate of the student ability
def Model_Prob(B, D):
    exp1 = math.exp((B - D)/5)
    exp1 = (exp1/(1+exp1))

    return exp1

# Determing the difficulty of the next question
def Question_Selection(D, L, A, R):
    d = D
    if( A == True or A == 1):
        R = R + 1
        D = D + 20/L
    else:
        D = D - 20/L
        if(D < 0):
            D = d
    
    return D, R

# It measures the ability of the student based on the questions attempted so far
def Estimate_Measure1(H, L, R, W):
    if( W == 0):
        R = R-0.5
        W = 0.5
    if(R == 0):
        R = 0.5
        W = W - 0.5

    B = H/L + np.log(R/W)

    return B

def Estimate_Measure2(B, R, Plist):
    sum1 = 0
    sum2 = 0

    for item in Plist:
        sum1 = sum1 + item
        sum2 = sum2 + item*(1-item)
    
    Bprime = B + ((R - sum1)/sum2)
    return Bprime

# It gives us the Estimated error of the student
def Estimate_Error1(L, R, W):
    if( W == 0):
        W = 0.5
        R = R - 0.5
    if( R == 0):
        R = 0.5
        W = W - 0.5

    S = np.sqrt(L/(R*W))

    return S

def Estimate_Error2(Plist):
    sum1 = 0
    for item in Plist:
        sum1 = sum1 + item*(1-item)
        # print(item)

    # if(sum1 != 0):
    sum1 = math.sqrt(sum1)
    # else:
    #     sum1 = 100

    return (1/sum1)

# Return 1 for Pass, -1 for Fail and 0 for need more questions for determining the result
# def Result(T, S, B):
#     if( T-S<=B and B <=T+S ):
#         return 0
#     if( B-S>T ):
#         return 1
#     if( B+S < T):
#         return -1

# This function emulates a test giver(child in our case) D = is the Ability of the child vs d = difficulty of the question 
def Prob_ans(D, d):
    exp = math.exp((D-d)/5)
    prob = exp/(1+exp)

    num = random.randint(1, 1000)
    if(num <= 1000*prob):
        return 1 # Returning false for the asked question 
    else:
        return 0 # Returning true for the asked question 