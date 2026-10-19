# 📚 Topic 13: Debouncing & Throttling Utility

## 🧠 Theory & Concepts

### 1. Debouncing vs. Throttling
When handling high-frequency events (like typing in a search input, window resizing, or scrolling), firing a function on every single event can severely degrade performance.
* **Debouncing**: Ensures a function is only called *after* a certain amount of time has passed since the *last* time it was invoked (great for search inputs).
* **Throttling**: Ensures a function is called at most *once* every specified period, no matter how many times the event fires (great for scroll or resize listeners).

```javascript
function debounce(func, delay = 300) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}
```

---

## 🛠️ Exercises for Topic 13

Open your `script.js` file in this folder and complete the following tasks:

1. **Exercise 1 (Debounce Function):**
   - Implement a reusable `debounce(fn, delay)` helper function.

2. **Exercise 2 (Throttle Function):**
   - Implement a reusable `throttle(fn, limit)` helper function.

3. **Exercise 3 (Debounced Search UI):**
   - Create a search input in `#ui-sandbox`. Attach a debounced event listener that logs search queries only after the user stops typing for 500ms.
