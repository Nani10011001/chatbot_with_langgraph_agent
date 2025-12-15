import { Agentparams } from "../spawn_connect.js"
export const Agentcontrol=async(req,res)=>{
   try {
     const {prompt}=req.body
   const content= await Agentparams(prompt)
    res.status(200).json({
        success:true,
    Ai:content
    })
   } catch (error) {
    res.status(500).json({
        success:false,
        message:error
    })
   }
}