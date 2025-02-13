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

//Day 4 :-

//An array is a collection of elements (values) stored in a single variable. Arrays in JavaScript are dynamic, meaning they can grow or shrink in size, and they can hold any data type (numbers, strings, objects, even other arrays).

function checkArray() {
  var array = ["One", "Two", "Three"];

  document.write(array);

  let mixedArray = [1, "hello", true, { name: "John" }];

  document.write(mixedArray, mixedArray[3].name);
}

//Array methods :-

//Basic Array Methods :-

//1) Push() (Adds one or more elements to the end of an array) :-

function pushMethod() {
  var letters = ["a", "b", "c"];
  // Now i want to add another element in this array so i will use push() method to push elements in it.

  letters.push("d", "e", "f");

  document.write(letters);
}

// 2) Pop() (Remove an element from the end of an array) :-

function popMethod() {
  var letters = ["a", "b", "c"];
  // Now i want to remove an element in this array so i will use pop() method to remove an element in it.

  letters.pop();

  document.write(letters);
}

// 3) Shift() (Removes an element from the start of an array) :-

function shiftMethod() {
  var letters = ["a", "b", "c"];
  //Now i want to remove an element from the start in this array so i will use shift() method in it.

  letters.shift();

  document.write(letters);
}

// 4) Unshift() (Add one more elements to the beginning of an array) :-

function unShiftMethod() {
  var letters = ["a", "b", "c"];
  //Now i want to add one or more elements to the beginning of an array so i will use unshiftMehod() in it.

  letters.unshift("0", "1", "2");

  document.write(letters);
}

// 5) Length() (Used to check the lenght of an array) :-

function length() {
  var letters = ["a", "b", "c"];

  //Now i want to check the length of this array.

  document.write(letters.length);
}

//Iteration Array Methods :-

//6) forEach() Method (Executes a function for each element in the array) :-

function forEach() {
  var letters = ["a", "b", "c"];
  //Now i want to show these element one by one means i want that function should be executed for each element.

  letters.forEach((letter, index) =>
    document.write(`${index + 1}`, " : ", letter.toUpperCase(), "<br>")
  );
}

//7) map() Method (Creates a new array by applying a function to each element) :-

function map() {
  var names = ["Alex", "John", "Charlie"];

  names.map((name, index) =>
    document.write(`Hello ${name} from index ${index + 1}, <br>`)
  );
}

//8) filter() Method (Creates a new array with elements that pass a test) :-

function filter() {
  var numbers = [4, 2, 9, 0, 5, 7];

  let final = numbers.filter((number) => number >= 5);

  document.write(final);
}

//9) reduce() Method (Reduce the array to a single value by applying a function) :-

function reduce() {
  let numbers = [1, 2, 3, 4];
  let sum = numbers.reduce((acc, num) => acc + num);
  document.write(sum);
}

//10) find() Method (Returns the first element that satisfies a condition) :-

function find() {
  let fruits = ["apple", "mango", "banana", "grapes"];

  let foundFruits = fruits.find((fruit) => fruit === "banana");

  document.write(foundFruits);
}

//11) some() Method (Checks if at least one element satisfies a condition) :-

function some() {
  let fruits = ["apple", "mango", "banana", "grapes"];

  let someFruit = fruits.some((fruit) => fruit.length > 3);

  document.write(someFruit);
}

//12) every() Method (Checks if all elements satisfy a condition) :-

function every() {
  let fruits = ["apple", "mango", "banana", "grapes"];

  fruits.every((fruit) => (fruit.length >= 5 ? document.write(fruits) : ""));

  // document.write(everyFruit);
}

//Manipulation Array Methods :-

//13) slice() Method (Returns a shallow copy of a portion of an array) :-

//It works according to the indexes.

function slice() {
  let fruits = ["apple", "mango", "banana", "grapes"];

  let specificElements = fruits.slice(1, 3);

  document.write(specificElements);
}

//14) splice() Method (Adds or removes elements from an array at a specific index) :-

function splice() {
  let fruits = ["apple", "mango", "banana", "grapes"];

  fruits.splice(1, 0, "kiwi");

  document.write(fruits);
}

//15) concat() Method (Combines two or more arrays) :-

function concat() {
  let fruits = ["apple", "mango", "banana", "grapes"];

  let moreFruits = ["orange", "strawberry"];

  let moreFruits2 = ["orange", "straw"];

  let addedFruits = fruits.concat([moreFruits, moreFruits2]);

  document.write(addedFruits);
}

//16) join() Method (Joins all elements of an array into a string) :-

// Does join() Work Only for Strings?
// => No, the join() method works for arrays of any data type, not just strings. It converts each element to a string before joining them.

function join() {
  let fruits = ["apple", "mango", "banana", "grapes"];

  let fruitString = fruits.join(", ");

  document.write(fruitString, "<br>");

  document.write(typeof fruitString);
}

//17) reverse() Method (Reverses the order of elements in an array) :-

function reverse() {
  let fruits = ["apple", "mango", "banana", "grapes"];

  fruits.reverse();

  document.write(fruits);
}

//18) sort() Method (Sorts the elements of an array) :-

//There are two methods of sort() which are Ascending and Descending order it works like this :-

//1) Ascending Order :-

// function sort() {
//   let fruits = ["apple", "mango", "banana", "grapes"];

//   fruits.sort();

//   document.write(fruits);
// }

//2) Descending Order :-

function sort() {
  let fruits = ["apple", "mango", "banana", "grapes"];

  fruits.sort((a, b) => b.localeCompare(a));

  document.write(fruits);
}

//Search Array Methods :-

//19) indexOf() Method (Returns the first index of a given element) :-

function indexOf() {
  let fruits = ["apple", "mango", "banana", "grapes"];

  let index = fruits.indexOf("banana");

  document.write(fruits, "<br>");

  document.write(`Index of ${fruits[index]} is : `, index);
}

//20) includes() Method (Checks if an array contains a specific element) :-

function includes() {
  let fruits = ["apple", "mango", "banana", "grapes"];

  let hasApple = fruits.includes("banana"); // Gives answer in True or False

  document.write(fruits, "<br>");

  document.write(hasApple);
}

//Iterations Method (One more) :-

//21) spread() Method (The spread operator is represented by three dots (...). It "unpacks" the elements of an iterable (e.g., an array or string) into individual elements) :-

// What Are Individual Elements?
// => Individual elements are the distinct items contained within a collection (like an array or string). For example:

// In an array, each item is an individual element.

// In a string, each character is an individual element.

// In an object, each key-value pair is treated as an individual element when using the spread operator.

function spread() {
  let fruits = ["apple", "mango", "banana", "grapes"];

  document.write(...fruits.join(" "));
}

//Day 5 :-

//Object :-

//An object in JavaScript is a collection of key-value pairs, where each key (also called a property) maps to a value. Objects are used to store and organize data in a structured way.

//Part 2:-

// There are two ways to access values of objects :-

// 1) Dot Notation (student.name).

// 2) Bracket Notation (student["subject"]).

function checkObject() {
  let student = {
    name: "Alex",
    subject: "Engineering",
    grade: "A+",
  };

  document.write(
    `Your name is ${student.name} <br> you study in ${student.subject} <br> you got ${student["grade"]} grade.`
  );
}

//Part 3:-

//We can also add new properties in object and can modify the existing one.

//Addding :-

function addedObject() {
  let student = {
    name: "Alex",
    subject: "Engineering",
    grade: "A+",
  };

  student.city = "New York";

  document.write(
    `Your name is ${student.name} <br> you are from ${student.city} <br> you study in ${student.subject} <br> you got ${student["grade"]} grade.`
  );
}

//Modifying :-

function modifiedObject() {
  let student = {
    name: "Alex",
    subject: "Engineering",
    grade: "A+",
  };

  student.subject = "Science";

  document.write(
    `Your name is ${student.name} <br> you are from ${student.city} <br> you study in ${student.subject} <br> you got ${student["grade"]} grade.`
  );
}

//Part 4:-

//Object Methods :-

//Methods are functions that are stored as object properties. They allow objects to perform actions.

function objectMethod() {
  let student = {
    name: "Alex",
    subject: "Engineering",
    grade: "A+",
    welcome: function () {
      document.write(`Hello my name is ${this.name}`);
    },
  };

  student.welcome();
}

//Part 5:-

//The this Keyword :-

//The this keyword refers to the current object in which the method is being called. It allows you to access the object’s properties and methods from within the method.

function thisKeyword() {
  let car = {
    brand: "Toyota",
    speed: 0,
    accelerate: function () {
      this.speed += 10;
      document.write(`The ${this.brand} is now going at ${this.speed} km/h.`);
    },
  };

  car.accelerate();
}

//Part 6:-

//Nested Objects :-

//Objects can contain other objects as properties.

function nestedObjects() {
  let student = {
    name: "Alice",
    age: 25,
    address: {
      city: "New York",
      zipCode: "10001",
    },
  };

  document.write(
    `Hey, Your name is ${student.name} and your age is ${student.age} years old <br> You belong from ${student.address.city} which zip code is ${student.address.zipCode}. <br> <b>Thank You!</b>`
  );
}

//Part 7:-

//Object Methods and this in Depth.

// Let’s dive deeper into object methods and the this keyword.

// a) Method Shorthand

// In modern JavaScript, you can define methods using a shorthand syntax.

function shorthand() {
  let person = {
    name: "Alice",
    greet() {
      document.write(`Hello, my name is ${this.name}!`);
    },
  };

  person.greet();
}

// b) this in Arrow Functions

// Arrow functions do not have their own this. Instead, they inherit this from the surrounding (lexical) context.

// function thisArrow() {
//   let person = {
//     name: "Alice",
//     greet: () => {
//       document.write(`Hello, my name is ${this.name}!`); // `this` is not bound to the object
//     },
//   };

//   person.greet(); // Output: Hello, my name is undefined!
// }

// To fix this, use a regular function:

function thisArrow() {
  let person = {
    name: "Alice",
    greet() {
      document.write(`Hello, my name is ${this.name}!`);
    },
  };

  person.greet();
}

// Part 8:-

//Common Object Methods.

// JavaScript provides built-in methods for working with objects.

// a) Object.keys()

// Returns an array of an object’s keys.

function objectKeys() {
  let person = { name: "Alice", age: 25 };
  document.write(Object.keys(person));
}

// b) Object.values()

// Returns an array of an object’s values.

function objectValues() {
  let person = { name: "Alice", age: 25 };
  document.write(Object.values(person));
}

// c) Object.entries()

// Returns an array of an object’s key-value pairs as arrays.

function objectEntries() {
  let person = { name: "Alice", age: 25 };
  document.write(Object.entries(person));
}

//Practice for Objects :-

// Create an object representing a car with properties like brand, model, and speed. Add a method to accelerate the car.

function objectPractice() {
  var car = {
    brand: "Honda",
    model: "2024",
    speed: 0,
    accelerateCar: function () {
      document.write(
        `The car ${this.brand} of ${
          this.model
        } model is going with the speed of ${(this.speed += 10)}`
      );
    },
  };

  car.accelerateCar();
}

//Day 6 :-

//1. Template Literals :-

//Template literals are a way to create strings in JavaScript that allow for embedded expressions and multi-line strings. They are enclosed in backticks (`) instead of single or double quotes.

// Key Features :-

// 1. Embedded Expressions:

// You can embed variables or expressions directly into the string using ${}.

// 2. Multi-line Strings:

// You can write strings that span multiple lines without using \n.

//Embedded Expressions Example :-

function embeddedExpression() {
  var name = "Alex";

  var age = 27;

  // Without template literals

  // let message = "My name is " + name + " and I am " + age + " years old.";

  // With template literals

  let message = `My name is ${name} and I am ${age} years old.`;

  document.write(message);
}

//Multi-Line Strings Example :-

function multiLine() {
  let multiLine = `
    This is a multi-line string.
    It makes writing HTML or long text much easier.
  `;

  document.write(multiLine);
}

// 2. Destructuring

// Destructuring allows you to extract values from arrays or objects into distinct variables. It’s a concise way to unpack values.

// a) Array Destructuring

// Extract values from arrays into variables.

function arrayDestruct() {
  let numbers = [1, 2, 3];

  // Without destructuring
  // let a = numbers[0];
  // let b = numbers[1];
  // let c = numbers[2];

  // With destructuring
  let [a, b, c] = numbers;

  document.write(a, b, c); // Output: 1 2 3
}

// :- Skipping Elements

// You can skip elements by using commas.

function skipElements() {
  let [a, , c] = [1, 2, 3];

  document.write(a, c);
}

// :- Default Values

// You can provide default values in case the value is undefined.

function arrayDefaultValues() {
  let [a = 10, b = 20] = [1];

  document.write(a, ",", b); // Output: 1 20
}

//b) Object Destructuring

// Extract values from objects into variables.

function objectDestruct() {
  let person = { name: "Alice", age: 25 };

  // Without destructuring
  // let name = person.name;
  // let age = person.age;

  // With destructuring
  let { name, age } = person;

  document.write(name, age); // Output: Alice 25
}

// :- Renaming Variables

// You can rename variables while destructuring.

function renameVariable() {
  let person = { name: "Alice", age: 25 };

  let { name: fullName, age: years } = person;

  document.write(fullName, years); // Output: Alice 25
}

// :- Default Values

// You can provide default values in case the property is undefined.

function objectDefaultValues() {
  let { name = "Unknown", age = 18 } = { name: "Alice" };

  document.write(name, age); // Output: Alice 18
}
