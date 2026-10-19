# 📚 Topic 10: Data Sanitizer Utility

## 🧠 Theory & Concepts

### 1. Web Security & XSS (Cross-Site Scripting)
XSS vulnerabilities occur when untrusted user input (like form inputs or comments) is inserted directly into the DOM as HTML without sanitization, allowing malicious scripts to execute.

### 2. Sanitization Techniques
* **HTML Entity Escaping**: Replacing characters that have special meaning in HTML (`<`, `>`, `&`, `"`, `'`) with their corresponding HTML entities (`&lt;`, `&gt;`, `&amp;`, etc.) to prevent browsers from interpreting them as code.

```javascript
function escapeHTML(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
```

---

## 🛠️ Exercises for Topic 10

Open your `script.js` file in this folder and complete the following tasks:

1. **Exercise 1 (HTML Entity Escaper):**
   - Write a function `sanitizeInput(userInput)` that escapes dangerous HTML characters to prevent XSS attacks. Test it with `<script>alert('hack')</script>`.

2. **Exercise 2 (Text Stripper / Truncator):**
   - Write a utility function `truncateText(text, maxLength)` that strips excess whitespace and truncates strings with ellipsis (`...`).

3. **Exercise 3 (Secure Comment Box UI):**
   - Create a comment submission form in `#ui-sandbox`. Pass user comments through your sanitizer before rendering them in the DOM to prove scripts are safely defused.
