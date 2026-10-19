# 📚 Topic 28: Global Error Boundary Utility

## 🧠 Theory & Concepts

### 1. Global Error Handling in the Browser
Uncaught exceptions and failed promises can crash user experiences or fail silently. Global error handlers catch errors across the entire application:
* **`window.onerror`**: Catches runtime JavaScript errors.
* **`window.onunhandledrejection`**: Catches unhandled Promise rejections (failed async operations without `.catch()`).

```javascript
window.onerror = function(message, source, lineno, colno, error) {
    console.error("Global Error Caught:", { message, source, lineno, error });
    // Prevent default browser error popup if desired
    return true;
};

window.addEventListener("unhandledrejection", event => {
    console.error("Unhandled Promise Rejection:", event.reason);
});
```

---

## 🛠️ Exercises for Topic 28

Open your `script.js` file in this folder and complete the following tasks:

1. **Exercise 1 (Global Error Handlers):**
   - Set up `window.onerror` and `window.onunhandledrejection` handlers to log errors cleanly.

2. **Exercise 2 (Safe Execution Wrapper):**
   - Write a wrapper function `tryCatchWrapper(fn, fallbackValue)` that safely executes risky functions without crashing the app.

3. **Exercise 3 (Error Boundary UI Alert):**
   - Create buttons in `#ui-sandbox` that trigger a runtime error and an unhandled promise rejection. Display a friendly fallback error notification banner in the UI when caught.
