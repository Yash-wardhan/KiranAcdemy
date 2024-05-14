//class work

//number array -- [3,3,5,65,4,3] user declear es the size of the array and we declare it in main 
//Addition even index and odd index addition
// Rest operator  -- max(3,45,5,44,4) --- find out max number  


const start= ()=>{
    var arr = [2,3,4,5,6,7,8,9];
    var [a,,b,,c,,d] = arr;
    var sum = a+b+c+d
    console.log(`sum of even ${sum}`)
}

const maxNumber = (...args) =>{
    for(var i of args){  //in or of diffences
        if(i < i+1){
            max = i
        }
    }
    console.log(`max number of arr :${max}`)
}

arr = [1,2,3,4,5,6,7,8,9,10]
// evenANDoddNumber(arr)
start()
maxNumber(1,2,3,4,5,6,7,8,9,10)
// if pass array then how to treat 