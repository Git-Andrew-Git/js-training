# 📚 Topic 26: Advanced Logger Utility

## 🧠 Theory & Concepts

### 1. Structured Logging in JavaScript
Standard `console.log()` is great for quick debugging, but production applications require a robust logging service with:
* **Log Levels**: `INFO`, `WARN`, `ERROR`, `DEBUG`.
* **Timestamps**: Knowing exactly when an event occurred.
* **Metadata / Context**: Attaching additional context to logs.
* **Transport / Batching**: Sending logs to remote monitoring servers or keeping a local history buffer.

```javascript
class Logger {
    constructor(prefix = "APP") {
        this.prefix = prefix;
    }

    info(message, data = {}) {
        console.log(`[${this.prefix}] [INFO] ${new Date().toISOString()}:`, message, data);
    }

    error(message, error = {}) {
        console.error(`[${this.prefix}] [ERROR] ${new Date().toISOString()}:`, message, error);
    }
}
```

---

## 🛠️ Exercises for Topic 26

Open your `script.js` file in this folder and complete the following tasks:

1. **Exercise 1 (Logger Class):**
   - Implement a `Logger` class with methods `info()`, `warn()`, `error()`, and `debug()`, including ISO timestamps and log levels.

2. **Exercise 2 (Log History Buffer):**
   - Add an internal log buffer array to your `Logger` that stores the last 50 log entries in memory so they can be reviewed or exported.

3. **Exercise 3 (Log Viewer UI Console):**
   - Create a custom on-screen console box inside `#ui-sandbox` that displays logs color-coded by their level (`INFO` in blue/green, `ERROR` in red).
