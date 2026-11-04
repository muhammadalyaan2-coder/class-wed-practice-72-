// let student = {
//     name: "Ali",
//     age: 20,
//     marks: 85
// };

// console.log(student);
// console.log(student.name,student.age,student.marks);


// student.name = "Ahmed";
// console.log(student.name);

// student.age = "50";
// console.log(student.age);

// student.city = "karachi"
// console.log(student.city);

// function Student(name, age, marks) {

//     this.name = name;
//     this.age = age;
//     this.marks = marks;

// }

// let student1 = new Student("Ali", 20, 85);

// console.log(student1);
// function Student(name, age, marks) {

//     this.name = name;
//     this.age = age;
//     this.marks = marks;

// }

// function Student (name,age,marks,city) {
//     this.name = name;
//     this.age = age;
//     this.marks = marks;
//     this.city = city;

// }


// let student1 = new Student("Ali", 20, 85 , "karachi");

// let student2 = new Student("Ahmed", 21, 90, "karachi");

// let student3 = new Student("Sara", 19, 95, "karachi");

// console.log(student1);
// console.log(student2);
// console.log(student3);

// console.log(student1.name);
// console.log(student2.age);
// console.log(student3.city);



function BankAccount(owner, balance, amount) {

    this.owner = owner;
    this.balance = balance;
    this.amount = amount;

}

let account1 = new BankAccount("Ali", 5000, 1000);
let account2 =  new BankAccount("zain" , 15000 ,2500)

console.log(account1);
console.log(account2);

console.log(account1.owner);
console.log(account1.balance);
console.log(account1.amount);

























