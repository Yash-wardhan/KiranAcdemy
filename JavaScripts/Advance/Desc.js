/**
 * 
 */

var color = ["Violet","Indigo","Black","Red","Yellow"]

var[,,,c1,c2] = color;
console.log(c1,c2)

// Output c1 , c2 = Red Yellow

//REST PARAMATER IS AN IMROVED WAY TO HANDLE FUNCTION PARAMETER ALLOWING US TO MORE EASILY VARIOUS INPUT AS PARAMETERS IN A FUNCTIONS
function calculate(a,b,...yash){ //Rest Operator nth number agrumnent taken  as array its rest comes in last and first 
    var sum = 0 
    for(var i of yash){
        sum += i
    }
    console.log(`Total of array :${sum}`)
    console.log('a',a)
    console.log('b',b)
}

calculate(12,23,54,34)

//NORMAL PARAMTER WITH REST OPEARTOR

