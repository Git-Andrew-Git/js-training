# 📚 Topic 22: Client-Side Rate Limiter Utility

## 🧠 Theory & Concepts

### 1. What is Rate Limiting?
Rate limiting restricts how frequently a user can perform a specific action (like clicking a submit button, sending a message, or calling an API) within a given time window. This prevents spam, accidental double-clicks, and brute-force attacks.

### 2. Implementing a Token Bucket / Cooldown Rate Limiter
```javascript
class RateLimiter {
    constructor(limit = 3, interval = 5000) { // 3 actions per 5 seconds
        this.limit = limit;
        this.interval = interval;
        this.timestamps = [];
    }

    tryAcquire() {
        const now = Date.now();
        // Remove timestamps outside the current time window
        this.timestamps = this.timestamps.filter(t => now - t < this.interval);
        
        if (this.timestamps.length < this.limit) {
            this.timestamps.push(now);
            return true; // Allowed
        }
        return false; // Rate limited
    }
}
```

---

## 🛠️ Exercises for Topic 22

Open your `script.js` file in this folder and complete the following tasks:

1. **Exercise 1 (RateLimiter Class):**
   - Implement a `RateLimiter` class with `tryAcquire()` that enforces a maximum number of actions per time window.

2. **Exercise 2 (Cooldown Timer Helper):**
   - Write a helper that calculates remaining cooldown time when a user hits the rate limit.

3. **Exercise 3 (Spam-Protected Button UI):**
   - Create a button in `#ui-sandbox` protected by your `RateLimiter`. If clicked too fast, disable it temporarily and show a cooldown countdown message.
