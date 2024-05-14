//array

const myArr = [0,1,2,3,4]


var arr  = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

for(var i = 0 ; i<3 ; i++){
    var sum = 0
    var max = arr[0][0]
    var min = arr[0][0]
    for(var j =0 ; j<3 ; j++){
        document.write(arr[i][j]+" ")
        sum = sum + arr[i][j]
        if(max < arr[i][j]){
            max = arr[i][j]
        }
        if (min > arr[i][j]){
            min = arr[i][j]
        }
    }
    document.write(` Sum of = ${sum} , Max of = ${max} , Min of = ${min}<br>`)
}
console.log(arr[2])