/* Variables
Expressions
Arithmetic and assignment operators
Comparison and logical operators
Conditional statements
Objects and object properties
Methods
Combining multiple concepts to solve a programming problem 
Complete all four parts of the assignment.
Write your solutions in JavaScript.
Use meaningful variable and property names.
Use let and const appropriately.
Use strict equality (===) where appropriate.
Your program should produce clear and understandable output.
Include comments where requested.
Test your code before submission.
You may use either a browser console or a JavaScript runtime such as Node.js.
Submit one .js file containing all your answers.
*/

/* Question 1.1 — Student Information (5 marks)
Create variables representing a student's:

First name
Last name
Age
University
Current year of study */

const firstname = " Brenda "
const surname = "Beļājeva"
let age = 20;
const university = "Vidzeme University"
const studyyear = 3;

console.log(`Students information; ${firstname}, ${surname}, Age: ${age},University: ${university}, Study year: ${studyyear}`);

/* Question 1.2 — Grades (5 marks)
Create variables for three course grades. Calculate:

The total of the three grades
The average grade*/

let grade1 = 5;
let grade2 = 7;
let grade3 = 9;
let togethergrades = grade1 + grade2 + grade3;
let avaragegrade = togethergrades / 3;

console.log(`Students grade info; Total: ${togethergrades}, Avarage: ${avaragegrade},`);

/* Question 1.3 — Discount Calculation (5 marks)
Given:
Calculate the final price after applying the 10% discount to the total cost. Display the final price. 
*/
let price = 80;
let quantity = 3;
let discount = 0.10;

let total = price * quantity; 
let discountprice = total - (total * discount);
console.log(`total price; ${discountprice} EUR,`); 

/* Question 1.4 — Expressions and Operators (5 marks)
Given: 
Write JavaScript expressions that determine:

The remainder when a is divided by b
a raised to the power of b
Whether a is greater than b
Whether a is equal to b */

let a = 15;
let b = 4;

let remainder = a % b;
let power = a ** b;
let greater = a>b;
let equal = a===b;
console.log(`determine: ${remainder}, Power: ${power}, a>b: ${greater}, a === b: ${equal}`);

/* Question 2.1 — Grade Classification (10 marks)
Write a program that receives a student's average grade and displays the appropriate result:

Average Grade	Result
90 or above	Excellent
80–89	Very Good
70–79	Good
50–69	Pass
Below 50	Fail
Use an if...else if...else structure. */

function classifygrade(avg) {
    let result;
    if (avg >=90) {
        result = "Excellent";
    } else if (avg >= 80) {
    result = "Very Good";
  } else if (avg >= 70) {
    result = "Good";
  } else if (avg >= 50) {
    result = "Pass";
  } else {
    result = "Fail";
  }
  return result;
}
console.log(`Average 87 = ${classifygrade(87)}`);
console.log(`Average 45 = ${classifygrade(45)}`);


/* Question 2.2 — Age Conditions (5 marks)
Create a variable called let age;. Write conditions that determine whether a person:

Can vote — age is 18 or above
Can receive a student discount — age is 16 or above
Use logical operators where appropriate. */

let votingage = 18;
let can = age >= 18;
let discountage = age >=16;
console.log(`Age: ${votingage}, Can vote: ${can}, Student discount: ${discountage}`);

/* Question 2.3 — Login Validation (5 marks)
Given:

let username = "student";
let password = "js123";
Write a condition that prints Login successful only when both the username and password are correct. Otherwise, print Invalid credentials.

Use the logical AND operator (&&). */

let username = "student";
let password = "js123";

let correctusername = "student";
let correctpassword = "js123";

if (correctusername === username && correctpassword === password) {
    console.log("Login successful");
} else { 
    console.log("Invalid username or password");
}


/* Question 2.4 — Equality Operators (5 marks)
Explain, using comments in your JavaScript code, the difference between:

==
===
Then provide an example demonstrating the difference.
*/


let x = "10";
let y = 10;
console.log(`"5" == 5 ${x == y}`);
console.log(`"5" === 5 ${x === y}`);

