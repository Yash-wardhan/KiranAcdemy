module.exports = function reqFilter(req,res,next){
    console.log(`middleware`)
    next();
}