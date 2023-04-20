// javascript completed !

// There are two types of variables 
// 1. Global scope
// 2. Local scope

// var = global scope
// let = local scope (value can also be updated )
// const = local scope (value cannot be updated )


if (true) {
    // pie  = 3.142 (value never changes because it is a constant)
    let a = "seharFatimaDev";
    a = "chotaBacha";
    console.log(a);
}


const add = (num1, num2) => {
    return num1+num2;
}
console.log(add(5,5));

// map
// filter
// reduce 

let chezen = ["baat khatam", "block", "gussa", "ignore", "ego"];
const harkaten = chezen.map((chat)=>{
    return chat + " Bhiye wahh";
})

// maths mera favourite subject hay 

let arr = [1, 2, 3, 4, 5];
arr.map((result) => {
    let arr2 = [34567];
    arr2.push(result + 2);
    console.log(arr2);
})
