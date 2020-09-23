import math
# Implementing a function that takes question as input add calculates the approximation of new values for different skills
# Q_skill is an boolean true/1 for skills that will be present in the question. We are going to update those Measure of the student only
def Vector_Estimate_Measure(Q_skill, S_skill, No_of_right_answers, Probability_Estimate_of_question):
    sum1 = 0
    sum2 = 0
    R = No_of_right_answers

    for item in Probability_Estimate_of_question:
        sum1 = sum1 + item
        sum2 = sum2 + item*(1-item)
    
    for i in range(len(S_skill)):
        if(Q_skill[i] == 1):
            S_skill[i] = S_skill[i] + ((R - sum1)/sum2) 
        # Bprime = B + ((R - sum1)/sum2)

    return S_skill

def Vector_Model_Prob(S_skill, Q_skill):
    min = 1000000000
    for i in range(len(Q_skill)):
        exp1 = math.exp((S_skill[i] - Q_skill[i])/5)
        exp1 = (exp1/(1+exp1))
        if(min>exp1):
            min = exp1

    return min
