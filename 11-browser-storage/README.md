# 📚 Module 11: Browser Storage & Forms

## 🧠 Theory & Concepts

### 1. `localStorage` vs `sessionStorage`
Both allow you to store key-value pairs in the browser, but with different lifespans:
* **`localStorage`**: Data persists even after the browser is closed and reopened (until explicitly cleared).
* **`sessionStorage`**: Data is cleared as soon as the browser tab or window is closed.

### 2. Key Methods
* **`localStorage.setItem(key, value)`**: Stores data (note: values must be strings; use `JSON.stringify()` for objects/arrays).
* **`localStorage.getItem(key)`**: Retrieves data (use `JSON.parse()` to restore objects/arrays).
* **`localStorage.removeItem(key)`**: Deletes a specific key.
* **`localStorage.clear()`**: Wipes all stored data.

### 3. Client-Side Form Validation
Before sending data to a server, you can check validity using JavaScript or HTML5 built-in validation attributes (`required`, `minlength`, `pattern`) combined with JS check methods like `element.checkValidity()`.

---

## 🛠️ Exercises for Module 11

Open your `script.js` file in this folder and complete the following tasks:

1. **Exercise 1 (Saving & Loading Strings):**
   - Create an input and a "Save" button. When clicked, save the input value to `localStorage` under the key `"savedUsername"`.
   - Add a "Load" button that retrieves the value and displays it.

2. **Exercise 2 (Saving Objects/Arrays):**
   - Create an array of user settings (e.g., `{ theme: "dark", notifications: true }`).
   - Use `JSON.stringify()` to save it to `localStorage`, then retrieve and parse it back using `JSON.parse()`.

3. **Exercise 3 (Simple Form Validation):**
   - Build a form with an email input. Add validation logic on submit: if the email is empty or doesn't contain "@", prevent submission and show an error message.
