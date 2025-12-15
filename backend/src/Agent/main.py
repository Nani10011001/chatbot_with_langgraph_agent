from langgraph.graph import StateGraph, START, END
from langchain_groq import ChatGroq
from langchain_core.messages import HumanMessage,AIMessage,BaseMessage,SystemMessage
from dotenv import load_dotenv
from typing import TypedDict,List
load_dotenv()
import os,sys,json


class Agent_state(TypedDict):
    messages:List[BaseMessage]
  
llm=ChatGroq(model_name="llama-3.1-8b-instant",api_key=os.getenv("GROQ_API_KEY"))
def chat_agent(state:Agent_state):
    response=llm.invoke(state["messages"])
    state["messages"].append(AIMessage(content=response.content))
   
    return state
graph=StateGraph(Agent_state)
graph.add_node("chatagent",chat_agent)
graph.add_edge(START,"chatagent")
graph.add_edge("chatagent",END)
app=graph.compile()

# ✅ Initialize memory ONCE
conversationHistory: List[BaseMessage] = [SystemMessage(content=("Your the personal ai assistant "
    "you should remeber user datials of name and conversation history for futher conversation "
    ))]
for dataline in sys.stdin:
    try:
        data=json.loads(dataline)#make the data into the json from the javascript thing
        user_input=data['input']

        conversationHistory.append(HumanMessage(content=user_input))

        result=app.invoke({"messages":conversationHistory})

        conversationHistory=result["messages"]
        print(json.dumps({"output":conversationHistory[-1].content}),flush=True)

    except Exception as e:
        print(json.dumps({"error":str(e)}),flush=True)




