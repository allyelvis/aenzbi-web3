const express=require("express")
const {ethers}=require("ethers")

const provider=new ethers.JsonRpcProvider("https://eth.llamarpc.com")
const app=express()

app.get("/block",async(req,res)=>{
let b=await provider.getBlock("latest")
res.json(b)
})

app.listen(4100)
