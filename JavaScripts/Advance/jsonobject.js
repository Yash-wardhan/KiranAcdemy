const  person = {
    firstName: "Yash Wardhan",
    lastName: "Sinha",
    age: 23,
    role: "Manager",
    email: "yashwardhansinha@gmail.com",
    fullnName: function(){
        return this.firstName + " "+this.lastName
    }
}


console.log(person.firstName)
console.log(person.fullnName())

//object
const Employee = [
    {
        empid: 101,
        ename: "John",
        country: "US",
        salary : 56789
    },
    {
        empid: 102,
        ename: "Yash",
        country: "India",
        salary : 564433,
    },{
        empid: 103,
        ename: "Blake",
        country: "France",
        salary : 45434,

    },{
        empid: 104,
        ename: "Ram",
        country: "India",
        salary : 54355
    }
    ,{
        empid: 105,
        ename: "Shiya",
        country: "South Africa",
        salary : 76544
    }
]
for(var i = 0 ; i<Employee.length;i++){
   console.log(`Employee id ${Employee[i].empid}`)
}


//forEach (iterate object using forEach)
Employee.forEach((eleMs)=>{
    if(eleMs.country == 'India')
    console.log(`Employee Id is ${eleMs.empid} and Employees is name  is ${eleMs.ename}`);
})
console.log('Salary is above 50,000')
Employee.forEach((salary)=>{
    if(salary.salary > 50000){
        console.log(`Employee ID ${salary.empid} and Employee Salary ${salary.salary}`)
    }
})
//for of -  loop through the array values
for(let ele of Employee){
    console.log(ele)
}
//for in

for(let e in Employee){
    console.log(Employee[e])
}
//map function

// let newEmp = Employee.filter(country() == 'India').map((e)=>{
//     if(e.country == "India"){
//         return e;
//     }
// })

console.log('filter')

let newEmp1 = Employee.filter(function(e)
{return e.country !='India'}
);


debugger
//its hold value in variable
console.log(newEmp1)
