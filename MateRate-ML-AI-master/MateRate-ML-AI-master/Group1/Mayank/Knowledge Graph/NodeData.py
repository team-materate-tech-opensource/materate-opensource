class NodeData:
    skill = []
    concept = -1

    def __init__(self, concept, skill):
        self.skill = skill
        self.concept = concept
    
    def Add_Skill(self, skill):
        self.skill.append(skill)

    def Add_Skills(self, skill):
        self.skill = skill
    
    def Add_Concept(self, concept):
        self.concept = concept

    def Print(self):
        print("Concept name is: ", end="")
        print(self.concept)
        print("List of different skill values are: ", end="")
        print(self.skill)
