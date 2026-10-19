# 📚 Module 4: Functions & Scope

## 🧠 Theory & Concepts

### 1. Function Declarations vs. Expressions
* **Function Declaration**: Hoisted (can be called before it is defined in the code).
```javascript
function sayHello(name) {
    return `Hello, ${name}!`;
}
```
* **Function Expression**: Stored in a variable. Not hoisted.
```javascript
const sayHi = function(name) {
    return `Hi, ${name}!`;
};
```

### 2. Arrow Functions (ES6)
A shorter syntax for writing functions. Great for callbacks and cleaner code.
```javascript
const add = (a, b) => a + b;
```

### 3. Scope & Scope Chain
Scope determines the accessibility of variables.
* **Global Scope**: Declared outside any function or block. Accessible everywhere.
* **Function Scope**: Declared inside a function (`var`, `let`, `const`). Only accessible inside that function.
* **Block Scope**: Declared inside curly braces `{}` using `let` or `const`. Only accessible within that block.

---

## 🛠️ Exercises for Module 4

Open your `script.js` file in this folder and complete the following tasks:

1. **Exercise 1 (Function Declaration):**
   - Write a function `calculateArea(width, height)` that returns the area of a rectangle. Test it with `console.log`.

2. **Exercise 2 (Arrow Function):**
   - Convert a function that checks if a number is even (`isEven(num)`) into a concise arrow function.

3. **Exercise 3 (Scope):**
   - Create a global variable `appName`. Write a function that declares a local variable with the same name and prints both to demonstrate shadowing and scope.
