//Promise are used to handle async operations in js 

//callback hell



let promise = new Promise((resolve, reject) => {
    let a = 3
    if ( a < 5){
        resolve("Data Loaded");
    } else{
        reject("Error while loading data")
    }
})

promise.then((resolve)=>{
    console.log("Success ==>",resolve)
}
).catch((reject)=>{
    console.log("Error ==>",reject)
})