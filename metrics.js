const os=require("os")

setInterval(()=>{
console.log("cpu",os.loadavg())
console.log("mem",os.freemem())
},5000)
