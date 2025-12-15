import React from 'react'
import { useState } from 'react'
import axios from "axios"
const ChatBox = () => {
  const [userinput,setUserinput]=useState('')
  const [message,setMessage]=useState([])

  const inputHandel=async()=>{
    if(!userinput.trim()) return // prevent the empty message thing
    const userMess={
    role:"user",
    text:userinput
  }
try{

  setMessage((prev)=>[
  ...prev,userMess
])
// sending the human message 
const {data}=await axios.post('http://localhost:4000/api/chatagent',{prompt:userMess.text})
console.log(data)
setUserinput("") 
// ai response message
const AIMessage={
    role:"Ai",
    text:data.Ai
}
setMessage((prev)=>[
    ...prev,AIMessage
])

}
catch(error){
console.error(error)
}
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center">

      {/* Chat Card */}
      <div className="w-[420px] h-[520px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">

        {/* Header */}
        <div className="bg-blue-500 text-white text-center font-semibold py-3 tracking-wide">
          AI Chatbot
        </div>

        {/* Chat Body */}

        <div className="flex-1 p-4 space-y-3 overflow-y-auto bg-gray-50">
        {
          message.map((msg,index)=>(
            <div key={index} className={`max-w-[80%] px-3 py-2 rounded-lg shadow text-xs ${
              msg.role==="user"?"mr-auto bg-blue-400 text-white":" ml-auto bg-white"
            }`}>
{msg.text}
            </div>
          ))
        }

        </div>

        {/* Input Area */}
        <div className="p-3 border-t flex gap-2">
          <input
           onChange={(e)=>setUserinput(e.target.value)} 
           value={userinput}
            type="text"
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button onClick={inputHandel}  className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
            Send
          </button>
        </div>

      </div>
    </div>
  )
}

export default ChatBox

