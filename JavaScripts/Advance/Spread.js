const arr1 = [1,2,3]
const arr2 = [4,5,6]

const mergedArray = [...arr1,...arr2]
console.log(mergedArray)


const or = [1,2,3]
const copy = or
console.log(copy)
copy.push(1)
console.log('changed',copy)
console.log('no changed',or)  //change in the orginal array

const nochange = [...or]
nochange.push('backchodi')
console.log('after change in new array',nochange)
console.log('or',or)

const obj1 = { a:1 , b:2 }
const obj2 = { b:4 , c:6 }

merge = { ...obj1 , ...obj2}
console.log(merge)