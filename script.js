//DAY 1 :-

//Variables in Javascript

//1. var

//var is function-scoped, allowing variable access throughout the function.

function varvariable() {
  var exp = 2000;
  {
    var boys = 22;
  }
  document.write("Total Boys:", " ", boys, "<br>");
  document.write("Total Expense:", " ", exp, "<br>");
}

//2. Let

//let is block-scoped, restricting variable access within its enclosing block.

function letvariable() {
  {
    let toys = 12;
    document.write("Total Boys:", " ", toys);
  }
  document.write("Total Boys:", toys); //It will not work because it is restricting variable access within its enclosing block.
}

// 3. Const

//const is block-scoped and prevents reassignment of the variable's value.

function constvariable() {
  {
    let food = 32;
    document.write("Total Food:", " ", food);
  }
  document.write("Total Food:", food); //It will not work because it is restricting variable access within its enclosing block.

  food = 43; //The thing which make the Const variable different from others is we can't change the value of const variable.
}

function primitive() {
  var name = "Alen"; //String
  document.write("String:", " ", name, "<br>");

  var number = 492; //Number
  document.write("Number:", " ", number, "<br>");

  var raining = false; //Boolean
  if (raining === true) {
    document.write("Boolean:", " ", "It's raining");
  } else {
    document.write("Boolean:", " ", "It's not raining", "<br>");
  }

  let date; //Undefined
  date = 32;
  if (date === undefined) {
    document.write("Undefined:", " ", "It is Undefined", "<br>");
  } else {
    document.write("Undefined:", " ", "It is defined", "<br>");
  }

  let mean = null; //Null
  if (mean === null) {
    document.write("Null:", " ", "It is null");
  } else {
    document.write("Null:", " ", "It is not null");
  }

  var a = Symbol("10"); //Symbol
  var b = Symbol("10");

  if (a === b) {
    document.write("Symbol:", " ", "A is equal to B", "<br>");
  } else {
    document.write("Symbol:", " ", "A is not equal to B", "<br>");
  }

  var largeNumber = BigInt(9372732747283628363728747338); //Bigint

  document.write("Bigint:", " ", largeNumber, "<br>");
}

function nonprimitive() {
  //Array
  var dishes = ["rice", "chicken", "custurd"];
  document.write("Array:", " ", dishes, "<br>");

  //Objects
  var cars = {
    firstName: "Finn",
    lastName: "Alen",
    age: 18,
    rollNo: 2193,
  };
  document.write(
    "Object:",
    " ",
    cars.firstName,
    " ",
    cars.lastName,
    " ",
    cars.age,
    " ",
    cars.rollNo,
    " ",
    "<br>"
  );

  // Array of Objects
  var teachers = [
    { teachName: "Alex", subject: "Physics", age: "25", salary: "$2000" },
    { teachName: "Finn", subject: "Chemistry", age: "43", salary: "$3000" },
    { teachName: "Jordan", subject: "GK", age: "28", salary: "$1600" },
    { teachName: "Head", subject: "Math", age: "32", salary: "$3200" },
  ];
  console.log("Here are teachers info:", teachers);
  document.write("Array of Teachers:", " ", "Check console for result 😉");
}

//Operators in Javascript

//1. Arithmetic Operator

function arithmeticOperators() {
  var a = 4;
  var b = 3;

  document.write("a = ", a, "<br>");
  document.write("b = ", b, "<br>");

  document.write("Addition : ", "a + b = ", a + b, "<br>");
  document.write("Subtraction : ", "a - b = ", a - b, "<br>");
  document.write("Multiplication : ", "a * b = ", a * b, "<br>");
  document.write("Division : ", "a / b = ", a / b, "<br>");
  document.write("Modulus : ", "a % b = ", a % b, "<br>");
  document.write("Exponentiation : ", "a ** b = ", a ** b, "<br>");

  //In Arithmetic operator, there are two different and unique operator which just need one operand, we dont see them in maths, that's why they are unique. These operators are called unary operators.
  //1. Increment (++)
  //2. Decrement (--)

  //Unary Operators

  // 1. Increment (++)

  var c = 2;

  c++; //Now c value will be 3 because c++ means c + 1, this is a short method to add a number in variable, there are two ways to write this first one is (c++) it is called Post Increament and second one is (++c) it is called Pre Increment. Both ways are valid,

  document.write("c = ", c, "<br>");

  //Some difference between using ways

  var e = 9;

  console.log("e++ = ", e++); //Post Increment dont change the value, it will firstly print the exact value and then change the value from next line

  console.log("++e = ", ++e); //In the other end Pre Increment changes the value first.

  // 2. Decreament (--)

  var d = 5;

  d--; //Now d value will be 4 because d-- means d - 1, this is a short method to descrease a number in variable, there are two ways to write this first one is (d--) it is called Post Decreament and second one is (--d) it is called Pre Decreament. Both ways are valid

  document.write("d = ", d);

  //Some difference between using ways

  var f = 6;

  console.log("f-- = ", f--); //Post Decrement dont change the value, it will firstly print the exact value and then change the value from next line

  console.log("--f = ", --f); //In the other end Pre Decrement changes the value first.
}

//2. Assignment Operator

function assignmentOperators() {
  var a = 4;
  var b = 3;

  //There are 6 Assignment Operators

  //1. equals to (=)

  console.log("a = ", a);

  //2. Plus-Equals to (+=)

  b += 4; //It means now b = b + 4
  document.write("Plus Equals to = ", b);

  // and like this there are many others including -=, *=, /=, %=, **=
}

//3. Comparision Operator

//There are some comparision operators like
//1. Equal to (==)
//2. Not Equal (!=)
//3. Equal value and type (===)
//4. Not equal value neither type (!==)
//5. Greater than (>)
//6. Less than (<)
//7. Greater than equal to (>=)
//8. Less than equal to (<=)

function comparisionOperator() {
  var a = 3;
  var b = 3;

  if (a == b) {
    document.write("A is equal to B");
  } else {
    document.write("A is not equal to B");
  }
}

//4. Logical Operator

//There are three types of Logical Operator

//1. Logical And (&&)
//2. Logical OR (||)
//3. Logical Not (!)

function logicalOperator() {
  //Logical And
  var a = 8;
  var b = 2;

  if (a == 2 && b == 2) {
    document.write("All of them value is 2", "<br>");
  } else {
    document.write("One of them value is not 2", "<br>");
  }

  //Logical OR
  var c = 8;
  var d = 2;

  if (c == 2 || d == 2) {
    document.write("One of them value is 2", "<br>");
  } else {
    document.write("None of them value is 2", "<br>");
  }
}

//5. Conditional Statements

//1. If
//2. If/else
//3. If/else elseif

function conditionalStatement() {
  // If/Else

  var a = 4;

  if (a % 2 === 0) {
    document.write(a, " ", "is even", "<br>");
  } else {
    document.write(a, " ", "is odd", "<br>");
  }

  // If/Else elseif (Used to check more conditions)

  var b = prompt("Enter your age");

  if (b < 24) {
    document.write("You are Beginner", "<br>");
  } else if (b >= 24 && b <= 31) {
    document.write("You are Junior", "<br>");
  } else if (b >= 32) {
    document.write("You are senior", "<br>");
  } else {
    document.write("We Apologize! Your role can not be calculated.", "<br>");
  }
}

//6. Ternary Operators

function ternaryOperator() {
  var a = 26;

  var result = a >= 18 ? "You are Adult" : "You are not Adult";
  document.write(result);
}

//Practice (Assigning Grades to students)

function gradesChecker() {
  var number = prompt("Enter your total number");

  if (number >= 80 && number <= 100) {
    document.write("Congratulations, you got A Grade");
  } else if (number >= 70 && number <= 89) {
    document.write("Nice, you got B Grade");
  } else if (number >= 60 && number <= 69) {
    document.write("Good, you got C Grade");
  } else if (number >= 50 && number <= 59) {
    document.write("Just survived, you got D Grade");
  } else {
    document.write("Nice try, you got F Grade");
  }
}

//DAY 2 :-

//Loops in Javascript

//Loop are used to execute a piece of code again and again.

//There are two types of Loops.

//1. General Loops (For, while and Do-While Loops).

//2. Special Loops (For in, For of Loops).

//There are 3 steps in loops which we follow:

//1. Initialization (Let i = 1)

//2. Stoping Condition (i >= 5)

//3. Updation (i++)

//There is also a loop which is called infinite loop which we should not have to use because it can damage our thing because it does infinite looping.

//=> General Loops

//1. For Loop

function forLoop() {
  for (let days = 1; days <= 31 && days >= 1; days++) {
    document.write(days, ": ", "Today Date is", " ", days, "<br>");
  }
}

// 2. While Loop

//All the loop work same but the difference is just writting method, they all work same...

function whileLoop() {
  let days = 1;

  while (days <= 31 && days >= 1) {
    document.write(days, ": ", "Today Date is", " ", days, "<br>");
    days++;
  }
}

//3. Do-while Loop

//There is a difference between While Loop and Do-While Loop which is in While loop we give condition in first so that's why if the condition is not matching then the loop will not run it self but in Do-While Loop we give condition in end that's why if our condition is even false then the loop will also run it self just one time.

function doWhileLoop() {
  let days = 32;

  do {
    document.write(days, ": ", "Today Date is", " ", days, "<br>");
    days++;
  } while (days <= 31 && days >= 1);
}

//As you can see here i have given value to variable which is not matching with condition but even it is giving me result :- 32: Today Date is 32

//=> Special Loops

//There are two loops in Special loops which helps us to put loop on some special data types.

//1. For-of Loops

// We use For-of loops to iterate over the values of strings and arrays.

// 1. for...of Loop
// The for...of loop is used to iterate over iterable objects such as:

// Arrays
// Strings
// Maps
// Sets
// NodeLists (browser-specific)

// function forOfLoop() {
//   let name = ["first", "second", "third"];

//   for (let value of name) {
//     document.write("Value:", " ", value, "<br>");
//   }
// }

//If we also want to get indexes of array then we can use entries() method because entries method returns both index and value as a pair of and array.

function forOfLoop() {
  let name = ["first", "second", "third"];

  for (let [index, value] of name.entries()) {
    document.write(`${index}:`, " ", value, "<br>");
  }
}

//2. For-in Loop

//We use for-in for objects.

// 2. for...in Loop
// The for...in loop is used to iterate over the enumerable properties of objects such as:

// Objects
// Arrays (not recommended, as it iterates over indices, not values)

function forInLoop() {
  let worker = {
    name: "David",
    contact: "82819377199",
    salary: "$2340",
    shift: "7 Hours",
  };

  for (let key in worker) {
    document.write(`${key}: `, worker[key], "<br>");
  }
}

// Use Case Summary:

// Use **for...of** when you need to iterate values of iterable objects like Arrays, Strings, Maps, or Sets.
// Use **for...in** when you need to iterate keys or properties of an object.

//Loops Practices

//1. Show all even numbers from 0 to 100.

function evenNumbers() {
  var value = prompt("Enter your number");

  for (let num = 0; num <= value.valueOf(); num += 2) {
    document.write("Even: ", num, "<br>");
  }
}

//2. Show all odd numbers from 0 to 100.

function oddNumbers() {
  var value = prompt("Enter your number");

  for (let num = 1; num <= value.valueOf(); num += 2) {
    document.write("Odd: ", num, "<br>");
  }
}

//DAY 3 :-

//Functions and Function Expressions.

//1. Functions

// A function is a reusable block of code designed to perform a specific task. Functions can be declared and then called (or executed) whenever needed.

// Function Declaration
// It uses the function keyword.
// It has a name and can be called by that name.
// It is hoisted, meaning it can be used before it is declared in the code.

function checkFunction() {
  function func(a, b) {
    document.write(
      `Your first value is ${a} and second value is ${b} and their addition equals to ${
        a + b
      }`
    );
  }
  func(4, 5);
}

//2. Function Expression

// Function Expressions
// A function expression is when you assign a function to a variable. It can be anonymous (without a name) or named.

// Anonymous Function Expression: No name is given to the function.
// Named Function Expression: The function has a name but is still assigned to a variable.
// Function expressions are not hoisted, so they must be defined before they are called.

// Anonymous Function Expression:

// const greet = function() {
//   console.log("Hello, world!");
// };

// greet(); // Output: Hello, world!

// Named Function Expression:

// const greet = function sayHello() {
//   console.log("Hello, world!");
// };

// greet(); Output: Hello, world!
// sayHello(); // Error: sayHello is not defined outside the function expression.
