# 📚 Topic 25: Deep Clone & Object Diffing Utility

## 🧠 Theory & Concepts

### 1. Shallow vs. Deep Copy
* **Shallow Copy** (`{...obj}` or `Object.assign()`): Copies top-level properties, but nested objects are still passed by reference.
* **Deep Copy**: Recursively copies all nested objects and arrays so that mutations to the clone do not affect the original object.

```javascript
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (obj instanceof Date) return new Date(obj.getTime());
    if (obj instanceof Array) return obj.map(item => deepClone(item));
    
    const clone = {};
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            clone[key] = deepClone(obj[key]);
        }
    }
    return clone;
}
```

### 2. Object Diffing
Comparing two objects to find which properties were added, removed, or changed.

---

## 🛠️ Exercises for Topic 25

Open your `script.js` file in this folder and complete the following tasks:

1. **Exercise 1 (Deep Clone Function):**
   - Write a recursive `deepClone(obj)` function that handles nested objects and arrays.

2. **Exercise 2 (Object Diffing Helper):**
   - Write a function `getObjectDiff(obj1, obj2)` that returns the differences between two objects.

3. **Exercise 3 (Clone & Diff UI Playground):**
   - Create a test object in `#ui-sandbox`, clone it deeply, modify the clone, and display both original and clone alongside their diff results.
