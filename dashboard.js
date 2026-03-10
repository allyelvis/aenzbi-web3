const express=require("express")

const app=express()

app.get("/",(req,res)=>{
res.send("Aenzbi Web3 Infrastructure")
})

app.listen(4200)
