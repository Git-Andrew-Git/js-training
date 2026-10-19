# 📚 Topic 17: Clipboard Manager Utility

## 🧠 Theory & Concepts

### 1. The Async Clipboard API
The modern Clipboard API (`navigator.clipboard`) provides secure, programmatic access to read and write text and data to the system clipboard.
* **`navigator.clipboard.writeText(text)`**: Copies text to the clipboard (returns a Promise).
* **`navigator.clipboard.readText()`**: Reads text from the clipboard (requires user permission).

```javascript
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        console.log("Text copied successfully!");
    } catch (err) {
        console.error("Failed to copy:", err);
    }
}
```

---

## 🛠️ Exercises for Topic 17

Open your `script.js` file in this folder and complete the following tasks:

1. **Exercise 1 (Copy to Clipboard Function):**
   - Write an async function `copyText(text)` using `navigator.clipboard.writeText`.

2. **Exercise 2 (Read from Clipboard Function):**
   - Write an async function `readClipboard()` that retrieves text from the user's clipboard and returns it.

3. **Exercise 3 (Copy-to-Clipboard Button UI):**
   - Create an input field filled with a sample text string and a "Copy" button in `#ui-sandbox`. When clicked, copy the text and show a temporary "Copied!" notification.
