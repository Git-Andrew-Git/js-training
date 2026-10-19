# 📚 Module 7: Advanced Functions (Callbacks & Closures)

## 🧠 Theory & Concepts

### 1. Callback Functions
A callback is a function passed as an argument to another function, to be executed at a later time.
```javascript
function processUser(name, callback) {
    console.log(`Processing ${name}...`);
    callback();
}

processUser("Alice", () => {
    console.log("Processing complete!");
});
```

### 2. Higher-Order Functions (HOF)
Functions that operate on other functions—either by taking them as arguments or by returning them.
```javascript
function multiplier(factor) {
    return function(num) {
        return num * factor;
    };
}
const double = multiplier(2);
console.log(double(5)); // 10
```

### 3. Closures
A closure is a function that remembers its outer variables and can access them even after the outer function has finished executing.
```javascript
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

---

## 🛠️ Exercises for Module 7

Open your `script.js` file in this folder and complete the following tasks:

1. **Exercise 1 (Callback Function):**
   - Write a function `delayedGreeting(name, callback)` that prints "Hello, [name]" and then executes the callback after 1 second (`setTimeout`).

2. **Exercise 2 (Higher-Order Function):**
   - Write a HOF `operation(a, b, fn)` that takes two numbers and a callback function (`fn`), performs the operation, and returns the result. Test it with addition and multiplication callbacks.

3. **Exercise 3 (Closure):**
   - Write a function `createSecretHolder(secret)` that keeps a secret variable private and returns an object or function to reveal it.
