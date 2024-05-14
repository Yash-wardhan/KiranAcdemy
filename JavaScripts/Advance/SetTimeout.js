//callback


const start = ()=> {
    setInterval(()=>{
        var d = new Date()
        console.log(d.toLocaleTimeString())
    },500)
}

start();