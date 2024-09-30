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
}
