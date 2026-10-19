# 📚 Topic 04: Form Validation Utility

## 🧠 Theory & Concepts

### 1. Client-Side Form Validation Patterns
Robust form validation ensures user data is correct before submitting to a server, improving UX and reducing bad requests.
* **Regular Expressions (RegEx)**: Used for pattern matching (e.g., validating email formats, strong passwords, phone numbers).
  ```javascript
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  ```
* **HTML5 Constraint Validation API**: Built-in methods like `element.checkValidity()`, `element.validationMessage`, and `element.setCustomValidity()`.

### 2. Real-Time vs. Submit Validation
* Validate on **submit** to prevent invalid requests.
* Validate on **input / blur** to give instant user feedback.

---

## 🛠️ Exercises for Topic 04

Open your `script.js` file in this folder and complete the following tasks:

1. **Exercise 1 (Email Regex Validator):**
   - Write a function `isValidEmail(email)` using RegEx that returns `true` for valid emails and `false` otherwise. Test it.

2. **Exercise 2 (Password Strength Checker):**
   - Write a function `checkPasswordStrength(password)` that checks if a password has at least 8 characters, 1 number, and 1 uppercase letter.

3. **Exercise 3 (Interactive Form with Error Display):**
   - Create a form with username, email, and password fields. Add real-time or submit validation with error messages rendered dynamically in the sandbox.
