import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import agentRouter from "./Router/router.js"
dotenv.config()

const app=express()

app.use(cors())
app.use(express.json())
app.use("/api",agentRouter)
app.listen(process.env.PORT,console.log(`server running at http://localhost:${process.env.PORT}`))

