const {ethers}=require("ethers")

const provider=new ethers.JsonRpcProvider("https://eth.llamarpc.com")

async function run(){
let block=await provider.getBlockNumber()
console.log("connected block",block)
}

setInterval(run,5000)
