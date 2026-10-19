# 📚 Topic 14: Local Cache API with TTL (Time-To-Live)

## 🧠 Theory & Concepts

### 1. What is TTL Caching?
When fetching data from APIs, making repetitive network requests slows down your app. Caching responses in memory or `localStorage` improves performance. 
However, data can become stale. A **TTL (Time-To-Live)** cache ensures that cached items automatically expire after a specified duration (e.g., 5 minutes), forcing a fresh fetch.

### 2. Implementing TTL Cache structure
```javascript
class TTLCache {
    constructor(defaultTTL = 60000) { // 1 minute default
        this.cache = new Map();
        this.defaultTTL = defaultTTL;
    }

    set(key, value, ttl = this.defaultTTL) {
        const expiry = Date.now() + ttl;
        this.cache.set(key, { value, expiry });
    }

    get(key) {
        const item = this.cache.get(key);
        if (!item) return null;
        if (Date.now() > item.expiry) {
            this.cache.delete(key);
            return null; // Expired
        }
        return item.value;
    }
}
```

---

## 🛠️ Exercises for Topic 14

Open your `script.js` file in this folder and complete the following tasks:

1. **Exercise 1 (TTLCache Class):**
   - Implement a `TTLCache` class with `set(key, val, ttl)` and `get(key)` methods that check expiration timestamps.

2. **Exercise 2 (Cache Expiration Test):**
   - Test your cache by setting an item with a very short TTL (e.g., 1 second), retrieving it immediately (success), and retrieving it after 1.5 seconds (returns `null`).

3. **Exercise 3 (Cached Fetch UI Demo):**
   - Create a button in `#ui-sandbox` that fetches data from an API. Store the response in your `TTLCache`. Subsequent clicks within the TTL window should load from cache instantly instead of making a new network request.
