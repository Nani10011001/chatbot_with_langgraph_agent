# 🤖 AI Chatbot using LangGraph & LLM

A conversational AI chatbot built using **LangGraph** and **Groq LLM**, with a **React frontend** and a **Python backend**.  
This project focuses on understanding **agent workflows, message-based memory, and scalable chat architecture**.

---

## ✨ Features

✅ Chat UI built with **React + Tailwind CSS**  
✅ Backend powered by **LangGraph** agent  
✅ Integrated **Groq LLM (LLaMA 3.1 8B Instant)**  
✅ Message-based conversation handling  
✅ System prompt support  
✅ STDIN / STDOUT based Node ↔ Python communication  
✅ Clean separation of frontend and backend  

---

## 🧠 Architecture Overview

Frontend (React)
│
│ HTTP / spawn (stdin/stdout)
▼
Backend (Node.js)
│
│ JSON messages
▼
LangGraph Agent (Python)
│
▼
Groq LLM (LLaMA 3.1)


---

## 🛠️ Tech Stack

### Frontend
- ⚛️ React
- 🎨 Tailwind CSS
- 🌐 Axios

### Backend
- 🟢 Node.js (Express)
- 🐍 Python

### AI / LLM
- 🔗 LangGraph
- 🧠 LangChain Core
- 🚀 Groq API (LLaMA 3.1 8B)

---

## 📂 Project Structure

chatbot-project/
│
├── frontend/
│ ├── src/
│ ├── App.jsx
│ └── tailwind.config.js
│
├── backend/
│ ├── server.js
│ └── spawn_python.js
│
├── agent/
│ └── chat_agent.py
│
├── .env
└── README.md


---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
bash..
git clone https://github.com/your-username/langgraph-chatbot.git
cd langgraph-chatbot

2️⃣ Setup Python Environment

cd agent
python -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate
Install dependencies:
pip install langgraph langchain-core langchain-groq python-dotenv
3️⃣ Setup Environment Variables

Create a .env file inside the agent/ folder:
GROQ_API_KEY=your_groq_api_key_here

Start Backend Server
cd backend
npm install
npm run dev
5️⃣ Start Frontend
cd frontend
npm install
npm run dev


🧩 How the Chat Agent Works

Each user message is wrapped as a HumanMessage

Full conversation history is passed to the LangGraph agent

The LLM responds using the entire message list

The agent appends AIMessage back to memory

Frontend displays messages dynamically
