# 📚 Module 5: Arrays & Array Methods

## 🧠 Theory & Concepts

### 1. Basic Array Operations
Arrays store multiple values in a single variable.
```javascript
const fruits = ["apple", "banana", "orange"];
fruits.push("grape");   // Adds to the end
fruits.pop();           // Removes from the end
fruits.unshift("mango");// Adds to the beginning
fruits.shift();         // Removes from the beginning
```

### 2. Essential Higher-Order Array Methods
* **`map()`**: Transforms every element in an array and returns a *new* array.
```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2); // [2, 4, 6]
```
* **`filter()`**: Filters elements based on a condition, returning a *new* array of matches.
```javascript
const ages = [12, 18, 22, 14];
const adults = ages.filter(age => age >= 18); // [18, 22]
```
* **`reduce()`**: Reduces array values down to a single accumulated value (sum, average, etc.).
```javascript
const sum = [1, 2, 3, 4].reduce((total, num) => total + num, 0); // 10
```
* **`find()` / `findIndex()`**: Locates the first element matching a condition.
* **`sort()`**: Sorts array elements (careful: modifies the original array or requires a compare function).

---

## 🛠️ Exercises for Module 5

Open your `script.js` file in this folder and complete the following tasks:

1. **Exercise 1 (Basic Array Methods):**
   - Create an array `shoppingList = ["milk", "bread"]`. Use `push` and `unshift` to add items, then print the result.

2. **Exercise 2 (`map()` & `filter()`):**
   - Given an array of numbers `[1, 2, 3, 4, 5, 6]`:
     - Use `filter()` to create an array of even numbers.
     - Use `map()` to create a new array where each even number is squared.

3. **Exercise 3 (`reduce()`):**
   - Given an array of prices `[10, 20, 30, 40]`, use `reduce()` to calculate and print the total sum.
