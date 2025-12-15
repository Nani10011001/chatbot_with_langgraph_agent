import { Agentcontrol } from "../controller/agent.controller.js";
import express from "express"

const agentRouter=express.Router()
agentRouter.post('/chatagent',Agentcontrol)
export default agentRouter