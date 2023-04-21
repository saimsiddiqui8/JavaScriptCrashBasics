// ********************  ES6  ********************
// spread operator
// rest operator


// concat
// const a = 555621;
// console.log("The value of a is " + a);

//template literals
// const a = 555621;
// console.log(`The value of a is ${a}`);



// Destructuring
// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     gender: 'male',
//     email: 'john.doe@example.com',
//     phone: '555-555-1212',
//     address: {
//         street: '123 Main St',
//         city: 'Anytown',
//         state: 'CA',
//         zipCode: '12345'
//     },
// };

// const { firstName, lastName, age, gender, email, phone, address, interests } = person;
// const {street, city, state, zipCode} = address;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(gender);
// console.log(email);
// console.log(phone);
// console.log(street);
// console.log(city);
// console.log(state);
// console.log(zipCode);

// const numbers = [1, 2, 3, 4, 5];

// const [first, second, , fourth] = numbers;

// console.log(first); // Output: 1
// console.log(second); // Output: 2
// console.log(fourth); // Output: 4

// spread operator

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const arr3 = [...arr1, ...arr2];

// console.log(arr3); // Output: [1, 2, 3, 4, 5, 6]

// function myFunc(...a) {
//     let result = 0
//     a.forEach((element) => result += element + 2)
//     return result;
// }
// console.log(myFunc(2, 4));

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let arr2 = [8, 9];
// console.log(...arr, ...arr2);

