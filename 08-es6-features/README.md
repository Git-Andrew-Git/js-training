# 📚 Module 8: ES6+ Power-Ups

## 🧠 Theory & Concepts

### 1. Destructuring (Arrays & Objects)
Extract properties from objects or items from arrays into distinct variables cleanly.
```javascript
// Object Destructuring
const user = { username: "Alice", age: 25 };
const { username, age } = user;

// Array Destructuring
const rgb = [255, 128, 0];
const [red, green, blue] = rgb;
```

### 2. Spread (`...`) and Rest (`...`) Operators
* **Spread**: Expands an array or object into individual elements.
```javascript
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]
```
* **Rest**: Collects multiple elements into a single array (often in function parameters).
```javascript
function sumAll(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
```

### 3. Optional Chaining (`?.`) & Nullish Coalescing (`??`)
* **Optional Chaining (`?.`)**: Safely access deeply nested properties without crashing if an intermediate property is `null` or `undefined`.
```javascript
const city = user?.address?.city;
```
* **Nullish Coalescing (`??`)**: Returns the right-hand side operand when the left-hand side is `null` or `undefined` (unlike `||` which catches falsy values like `0` or `""`).
```javascript
const setting = userInput ?? "default";
```

---

## 🛠️ Exercises for Module 8

Open your `script.js` file in this folder and complete the following tasks:

1. **Exercise 1 (Destructuring):**
   - Given an object `book = { title: "JS Guide", author: "John Doe", year: 2023 }`, use destructuring to extract `title` and `author` into variables and print them.

2. **Exercise 2 (Spread & Rest):**
   - Create two arrays and combine them using the spread operator `...`.
   - Write a function using the rest operator `...` that accepts any number of arguments and returns their product.

3. **Exercise 3 (Optional Chaining & Nullish Coalescing):**
   - Create an object with missing nested properties. Use optional chaining `?.` to access a deep property safely.
   - Use nullish coalescing `??` to assign a fallback value to a variable that is `null`.
