//fact

function fact(n){
    var factor = 1
    for(var i = 1;i<=n;i++){
        factor = factor*i
    }
    console.log(`fact of ${n} = ${factor}`)
}

function addition(a,b){
    console.log(a+b)
}

fact(5)
addition(5,5)
