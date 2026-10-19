# 📚 Module 3: Loops & Iteration

## 🧠 Theory & Concepts

### 1. The `for` Loop
Used when you know beforehand how many times you want to run a block of code.
```javascript
for (let i = 0; i < 5; i++) {
    console.log(`Current count: ${i}`);
}
```

### 2. The `while` Loop
Used when you don't know the exact number of iterations in advance, and it should run as long as a condition is `true`.
```javascript
let count = 0;
while (count < 3) {
    console.log(`While count: ${count}`);
    count++;
}
```

### 3. Iterating Arrays with `for...of`
A modern, clean way to loop over iterable objects like Arrays or Strings.
```javascript
const colors = ["red", "green", "blue"];
for (const color of colors) {
    console.log(color);
}
```

### 4. Loop Control: `break` and `continue`
* **`break`**: Exits the loop entirely.
* **`continue`**: Skips the current iteration and moves to the next one.

---

## 🛠️ Exercises for Module 3

Open your `script.js` file in this folder and complete the following tasks:

1. **Exercise 1 (The `for` Loop):**
   - Write a `for` loop that counts from 1 to 10 and prints only the even numbers.

2. **Exercise 2 (`for...of` Loop with Arrays):**
   - Create an array of your top 3 favorite programming languages.
   - Use a `for...of` loop to print each language in uppercase.

3. **Exercise 3 (Break & Continue):**
   - Write a loop from 1 to 10. Use `continue` to skip the number 5, and use `break` if the number reaches 8. Print each number.
