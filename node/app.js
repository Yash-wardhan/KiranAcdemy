// const welcome = {
//     sayHello:function(){
//         console.log("hello")
//     },
//     currDate: new Date().toLocaleDateString(),
//     currTime: new Date().toLocaleTimeString(),
//     companyName:"JBK"
// }
// module.exports = welcome

module.exports = class Square{
    constructor(width){
        this.width = width
    }
    Area(){
        return this.width **2
    }
}