# 📚 Topic 05: Local Storage Manager Utility

## 🧠 Theory & Concepts

### 1. Robust LocalStorage Wrapper
Directly using `localStorage.getItem()` and `setItem()` can get messy when dealing with objects, arrays, and error handling (e.g., when storage is full or disabled).
Creating a custom **Storage Manager Utility** handles serialization (`JSON.stringify` / `parse`) and fallbacks automatically.

```javascript
class StorageManager {
    static set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (e) {
            console.error("Storage save failed:", e);
            return false;
        }
    }

    static get(key, fallback = null) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : fallback;
        } catch (e) {
            console.error("Storage read failed:", e);
            return fallback;
        }
    }
}
```

---

## 🛠️ Exercises for Topic 05

Open your `script.js` file in this folder and complete the following tasks:

1. **Exercise 1 (Storage Wrapper Class):**
   - Implement a `StorageManager` class or object with helper methods `set(key, val)`, `get(key)`, and `remove(key)` that handle JSON serialization automatically.

2. **Exercise 2 (Persisting App State):**
   - Save an array of todo items to `localStorage` using your `StorageManager`. Reload the page (or simulate retrieval) and verify the state persists.

3. **Exercise 3 (Storage UI Wrapper):**
   - Create a simple UI in `#ui-sandbox` that allows saving and loading user preference settings (like theme) using your wrapper.
