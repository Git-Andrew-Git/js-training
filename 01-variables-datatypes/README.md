# 📚 Module 1: Variables, Data Types & Operators

## 🧠 Theory & Concepts

### 1. Variables (`let`, `const`, `var`)
Variables are containers for storing data values.
* **`const`**: Use this by default. Variables declared with `const` **cannot** be reassigned.
* **`let`**: Use this when you know the value of the variable will change (reassigned later).
* **`var`**: Old way of declaring variables (pre-ES6). Avoid using it because of confusing scoping rules (function scoped instead of block scoped).

```javascript
const birthYear = 1995; // Cannot be changed
let currentScore = 0;   // Can be updated later
currentScore = 10;      // Valid!
```

### 2. Primitive Data Types
JavaScript has 7 primitive data types:
1. **String**: Text data enclosed in quotes (`"Hello"`, `'World'`, `` `Template Literal ${variable}` ``).
2. **Number**: Integers or floating-point numbers (`42`, `3.14`).
3. **Boolean**: Logical values (`true` or `false`).
4. **Undefined**: A variable that has been declared but not yet assigned a value (`let x;`).
5. **Null**: Represents the intentional absence of any object value (`let user = null;`).
6. **BigInt**: For numbers larger than the `Number` type can safely hold.
7. **Symbol**: Unique and immutable identifiers.

### 3. Operators
* **Arithmetic**: `+` (addition), `-` (subtraction), `*` (multiplication), `/` (division), `%` (modulo / remainder), `**` (exponentiation).
* **Assignment**: `=`, `+=`, `-=`, `*=`, `/=`.
* **Comparison**: `==` (loose equality, checks value with type coercion), `===` (strict equality, checks both value and type), `<`, `>`, `<=`, `>=`.

---

## 🛠️ Exercises for Module 1

Open your `script.js` file in this folder and complete the following tasks:

1. **Exercise 1 (Variables & Data Types):**
   - Declare `studentName` (string), `studentAge` (number), and `isLearningJS` (boolean).
   - Print them to the console using `console.log()`.

2. **Exercise 2 (Arithmetic & Operators):**
   - Create `num1` and `num2`.
   - Calculate their sum, product, and modulo remainder.

3. **Exercise 3 (Template Literals & DOM Output):**
   - Create a greeting string using backticks `` `Hello, my name is ${studentName} and I am ${studentAge} years old.` ``.
   - Use the provided `displayOutput(greeting)` function to display it inside the HTML output box on your webpage!
