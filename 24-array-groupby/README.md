# 📚 Topic 24: Array Grouping & Aggregation Utility

## 🧠 Theory & Concepts

### 1. Data Grouping (`groupBy`)
In data processing, you often need to group an array of objects by a specific property or key (similar to SQL `GROUP BY`).
While modern JavaScript has introduced `Object.groupBy()`, writing your own custom grouping utility provides deep insight into how array aggregation works.

```javascript
function groupBy(array, keyFn) {
    return array.reduce((result, item) => {
        const key = typeof keyFn === 'function' ? keyFn(item) : item[keyFn];
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(item);
        return result;
    }, {});
}
```

---

## 🛠️ Exercises for Topic 24

Open your `script.js` file in this folder and complete the following tasks:

1. **Exercise 1 (Custom `groupBy` Function):**
   - Write a helper function `groupBy(array, propertyOrFunction)` that aggregates items into categories.

2. **Exercise 2 (Group Data by Category):**
   - Given an array of products with categories (`{ name: "Apple", category: "Fruit" }`), use your `groupBy` function to group them by category.

3. **Exercise 3 (Grouped Data Viewer UI):**
   - Render grouped items dynamically as categorized sections or cards inside `#ui-sandbox`.
