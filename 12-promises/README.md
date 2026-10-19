# 📚 Module 12: Promises & Asynchronous Basics

## 🧠 Theory & Concepts

### 1. Synchronous vs. Asynchronous JavaScript
* **Synchronous**: Code runs line by line in order. If one line takes time (like a heavy calculation or file read), everything else pauses (blocking).
* **Asynchronous**: Code allows long-running tasks to run in the background while the rest of the program continues executing (non-blocking).

### 2. `setTimeout` and `setInterval`
* **`setTimeout(callback, delay)`**: Executes a function once after a specified delay in milliseconds.
* **`setInterval(callback, interval)`**: Repeatedly executes a function at specified intervals until cleared with `clearInterval()`.

### 3. JavaScript Promises
A Promise is an object representing the eventual completion (or failure) of an asynchronous operation.
A Promise has 3 states:
1. **Pending**: Initial state, neither fulfilled nor rejected.
2. **Fulfilled (Resolved)**: Operation completed successfully (`.then()`).
3. **Rejected**: Operation failed (`.catch()`).

```javascript
const fetchData = new Promise((resolve, reject) => {
    let success = true;
    setTimeout(() => {
        if (success) resolve("Data fetched successfully!");
        else reject("Error fetching data.");
    }, 1500);
});

fetchData
    .then(result => console.log(result))
    .catch(error => console.error(error));
```

---

## 🛠️ Exercises for Module 12

Open your `script.js` file in this folder and complete the following tasks:

1. **Exercise 1 (Timeout & Interval):**
   - Use `setTimeout` to print "Time is up!" after 2 seconds.
   - Use `setInterval` to create a simple countdown timer from 3 down to 1, then stop it (`clearInterval`).

2. **Exercise 2 (Creating a Promise):**
   - Create a Promise named `checkEvenNumber(num)` that resolves if the number is even and rejects if it is odd. Test it using `.then()` and `.catch()`.

3. **Exercise 3 (Chaining Promises):**
   - Create a promise that resolves with a number (e.g., `5`), then chain `.then()` blocks to multiply it by 2, then add 10, printing the final result.
