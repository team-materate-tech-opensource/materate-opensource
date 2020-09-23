import networkx as nx
import matplotlib.pyplot as plt
import NodeData
    

g = nx.DiGraph()

edges = []
nodes = []

node_info = {}

file1 = open("Graph.txt")
flag = 0
counter = 0
for line in file1:
    counter = counter + 1
    line.replace("\n", "")
    if(line == "\n"):
        flag = 1
        continue

    listt = line.split("\" \"")

    # Flag = 0 is indicating we are currently looking at the Nodes part of input file and ignoring the comment
    if(flag == 0 and listt[0][0] != "#"):
        count = 0
        key = int(listt[0])
        node = NodeData.NodeData(key, [])
        key = -1
        for word in listt: 
            if(count == 0):
                nodes.append(key)
            else:
                node.Add_Skill(int(word))

            count = count + 1
        
        node_info[key] = node
        node.Print()

    # Looking at the Edges section of the text file and also ignoring the comment 
    if(flag != 0 and listt[0] != "\n"):
        num1 = int(listt[0])
        num2 = int(listt[1])
        tup = (num1, num2)
        edges.append(tup)

g.add_nodes_from(nodes)
g.add_edges_from(edges)

nx.draw_circular(g, with_labels = True)
plt.savefig("Graph")

