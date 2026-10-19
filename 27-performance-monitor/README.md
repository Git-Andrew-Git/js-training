# 📚 Topic 27: Performance Monitor Utility

## 🧠 Theory & Concepts

### 1. Measuring Execution Time & Performance
Optimizing web applications requires measuring how long operations take to execute.
* **`performance.now()`**: Returns a high-resolution timestamp (in milliseconds with microsecond precision) measured from page load. Much more accurate than `Date.now()`.
* **`console.time()` / `console.timeEnd()`**: Built-in console timer for quick code block profiling.

```javascript
const start = performance.now();
// ... execute heavy operation ...
const duration = performance.now() - start;
console.log(`Operation took ${duration.toFixed(2)}ms`);
```

---

## 🛠️ Exercises for Topic 27

Open your `script.js` file in this folder and complete the following tasks:

1. **Exercise 1 (Execution Timer Function):**
   - Write a helper wrapper function `measureExecutionTime(fn)` that measures how long any given callback function takes to run using `performance.now()`.

2. **Exercise 2 (Benchmark Comparison):**
   - Benchmark two different ways of doing something (e.g., a `for` loop vs. `forEach` on a large array) and log their execution times.

3. **Exercise 3 (Performance Dashboard UI):**
   - Create a button in `#ui-sandbox` that runs a simulated heavy computation, measures its duration, and displays the performance metrics on the screen.
