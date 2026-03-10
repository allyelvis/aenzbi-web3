const express=require("express")
const axios=require("axios")

const app=express()
app.use(express.json())

const RPCS={
eth:[
"https://eth.llamarpc.com",
"https://cloudflare-eth.com"
],
bsc:[
"https://bsc-dataseed.binance.org",
"https://rpc.ankr.com/bsc"
],
polygon:[
"https://polygon-rpc.com"
],
base:[
"https://mainnet.base.org"
]
}

async function call(chain,body){
for(const url of RPCS[chain]||[]){
try{
let r=await axios.post(url,body)
return r.data
}catch(e){}
}
throw "rpc failed"
}

app.post("/:chain",async(req,res)=>{
try{
let r=await call(req.params.chain,req.body)
res.json(r)
}catch(e){
res.send(e.toString())
}
})

app.listen(4000)
