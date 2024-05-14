module.exports =  (req,res,next)=>{
    if(!req.query.age){
        res.send("<h1 style='color:red'>Please provide a age</h1>")
    }
    else if(req.query.age<18){
        res.send("<h1 style='color:red'>Sorry You are under age!!!! you can't access website</h1>")
    }
    else{
        next()
    }
}