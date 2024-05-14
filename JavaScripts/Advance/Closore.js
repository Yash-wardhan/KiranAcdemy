//closure provide access to the outer scope of functions 
//from inside the inner function, even when that inner function is called from outside.



//nested functions


// function outerFunctions(Name){
//     function innerFunctions(){
//         console.log(`My Name is ${Name}`);
//     }
//     innerFunctions();
// }


// outerFunctions("Yash Wardhan");



//returning function using return keyword

// function outerFunctions(name){
//     function innerFunctions(age){
//         console.log(`hi .. Iam ${name} ${age}`)
//     }
//     return innerFunctions
// }


// newFunc = outerFunctions('Yash')
// console.log(typeof(newFunc)) 
// newFunc(23)   // calling returned function


function square(num){
    function power(b){
        return Math.pow(b,num)
    }
    console.log(num*num)
    return power;
}

newPower = square(3)
console.log(newPower(2)) 
