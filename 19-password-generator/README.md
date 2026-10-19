# 📚 Topic 19: Password Generator Utility

## 🧠 Theory & Concepts

### 1. Generating Secure Random Data
Creating a robust password generator involves selecting random characters from predefined character sets (uppercase letters, lowercase letters, numbers, and symbols).
* **`Math.random()`**: Good for basic randomness, but **not cryptographically secure**.
* **`crypto.getRandomValues()`**: Uses the Web Crypto API to generate cryptographically secure random numbers, ideal for password generators and tokens.

```javascript
function generatePassword(length = 12) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = "";
    const array = new Uint32Array(length);
    crypto.getRandomValues(array);
    
    for (let i = 0; i < length; i++) {
        password += chars[array[i] % chars.length];
    }
    return password;
}
```

---

## 🛠️ Exercises for Topic 19

Open your `script.js` file in this folder and complete the following tasks:

1. **Exercise 1 (Secure Password Generator Function):**
   - Write a function `generatePassword(length, includeSymbols, includeNumbers)` that builds and returns a randomized password string.

2. **Exercise 2 (Crypto Randomness):**
   - Refine your generator to use `crypto.getRandomValues()` instead of `Math.random()` for cryptographic security.

3. **Exercise 3 (Password Generator Widget UI):**
   - Build an interactive password generator widget in `#ui-sandbox` with a length slider, option checkboxes, a display box, and a "Copy Password" button.
