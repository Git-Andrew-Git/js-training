# 📚 Topic 12: Polling Service Utility

## 🧠 Theory & Concepts

### 1. What is Polling?
Polling is a technique where a client repeatedly makes HTTP requests to a server at fixed time intervals to check for new data or status updates (useful when WebSockets aren't available).

### 2. Implementing a Robust Polling Class
A good polling service needs:
* Start and stop controls (`setInterval` / `clearInterval`).
* Error handling so a single failed request doesn't crash the loop.
* Adjustable interval timing.

```javascript
class Poller {
    constructor(callback, interval = 3000) {
        this.callback = callback;
        this.interval = interval;
        this.timer = null;
    }

    start() {
        this.timer = setInterval(this.callback, this.interval);
    }

    stop() {
        clearInterval(this.timer);
    }
}
```

---

## 🛠️ Exercises for Topic 12

Open your `script.js` file in this folder and complete the following tasks:

1. **Exercise 1 (Poller Class):**
   - Create a `Poller` class that accepts a callback function and interval, with `start()` and `stop()` methods.

2. **Exercise 2 (Simulated Live Data Polling):**
   - Use your `Poller` to fetch a mock quote or timestamp every 3 seconds and log it to the console.

3. **Exercise 3 (Live Polling Dashboard UI):**
   - Create "Start Polling" and "Stop Polling" buttons in `#ui-sandbox` along with a status indicator showing the latest fetched update in real time.
