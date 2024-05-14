
var a = console.log('Enter Your Name:')

var pattern = /^[a]$/  // /rex $/ is used to check if the string contains only alphabets (both uppercase and lowercasevar

if(a.match(pattern)){
    console.log(true)
}else{
    console.log(false)
}