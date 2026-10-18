// ==========================================
// MODULE 1: Variables, Data Types & Operators
// ==========================================
// Welcome to your JS training workspace!
// Write your code below each exercise, save the file,
// and refresh index.html (or check your browser console F12).

console.log("🚀 app.js loaded successfully!");

// --- EXERCISE 1: Variables & Data Types ---
// TODO: Declare a variable named 'studentName' using const or let and assign your name to it.
// TODO: Declare a variable named 'studentAge' and assign your age to it.
// TODO: Declare a boolean variable 'isLearningJS' and set it to true.
// TODO: Print all three variables using console.log()



// --- EXERCISE 2: Basic Arithmetic & Operators ---
// TODO: Create two variables 'num1' and 'num2' with any numbers.
// TODO: Calculate their sum, product, and remainder (modulo), storing them in new variables.
// TODO: Print the results.



// --- EXERCISE 3: String Concatenation & Template Literals ---
// TODO: Create a variable 'greeting' using a template literal (backticks ``) 
// that combines 'studentName' and 'studentAge' into a sentence: 
// "Hello, my name is [name] and I am [age] years old."
// TODO: Print 'greeting' to the console and to the HTML output box provided below.

function displayOutput(text) {
    const outputBox = document.getElementById("console-output");
    outputBox.innerHTML = `<p>> ${text}</p>`;
}

// Test displayOutput:
displayOutput("Hello from JS function!");
