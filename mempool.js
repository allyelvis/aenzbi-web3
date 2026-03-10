const Web3=require("web3")

const web3=new Web3("wss://eth.llamarpc.com")

web3.eth.subscribe("pendingTransactions")
.on("data",tx=>{
console.log("tx",tx)
})
