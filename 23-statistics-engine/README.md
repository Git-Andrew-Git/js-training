# 📚 Topic 23: Statistics & Math Engine Utility

## 🧠 Theory & Concepts

### 1. Statistical Calculations in JavaScript
Analyzing numerical datasets is a fundamental task in data processing, dashboards, and games.
* **Mean (Average)**: Sum of all values divided by the count.
* **Median**: The middle value when numbers are sorted in ascending order.
* **Mode**: The number that appears most frequently in a dataset.
* **Standard Deviation**: Measures the amount of variation or dispersion of a set of values.

```javascript
function calculateMean(numbers) {
    const sum = numbers.reduce((acc, n) => acc + n, 0);
    return sum / numbers.length;
}
```

---

## 🛠️ Exercises for Topic 23

Open your `script.js` file in this folder and complete the following tasks:

1. **Exercise 1 (Mean & Median):**
   - Write functions `calculateMean(arr)` and `calculateMedian(arr)` to compute basic statistical metrics.

2. **Exercise 2 (Mode Calculator):**
   - Write a function `calculateMode(arr)` that finds the most frequently occurring value in an array of numbers.

3. **Exercise 3 (Dataset Analyzer UI):**
   - Create a number input and "Analyze" button in `#ui-sandbox`. Allow users to enter comma-separated numbers and view calculated mean, median, and mode instantly.
