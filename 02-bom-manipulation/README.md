# 📚 Topic 02: BOM Manipulation

## 🧠 Theory & Concepts

### 1. The Browser Object Model (BOM)
The BOM allows JavaScript to "talk" to the browser outside of the document context.
* **`window`**: The global browser window object.
* **`location`**: Provides information about the current URL and methods to redirect or parse query params (`window.location.href`, `window.location.reload()`).
* **`navigator`**: Provides metadata about the user's browser, operating system, and hardware capabilities (e.g., `navigator.userAgent`, `navigator.onLine`).
* **`screen`**: Provides information about the user's screen dimensions (`screen.width`, `screen.height`).
* **`history`**: Allows session history navigation (`history.back()`, `history.forward()`, `history.go()`).

---

## 🛠️ Exercises for Topic 02

Open your `script.js` file in this folder and complete the following tasks:

1. **Exercise 1 (Location & URL Inspection):**
   - Log the current URL, pathname, and host using `window.location`.

2. **Exercise 2 (Navigator & Connection Status):**
   - Check if the user is currently online using `navigator.onLine` and display their browser user agent in the `#ui-sandbox`.

3. **Exercise 3 (Screen Dimensions):**
   - Get the screen width and height using `window.screen` and display them inside a dynamic card in the sandbox.
