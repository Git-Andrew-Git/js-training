# 📚 Topic 18: Fullscreen & Media Controls Utility

## 🧠 Theory & Concepts

### 1. The Fullscreen API
The Fullscreen API allows you to present an element (like an image, video, or container div) in full-screen mode across the user's entire display.
* **`element.requestFullscreen()`**: Requests the browser to make the element fullscreen.
* **`document.exitFullscreen()`**: Exits fullscreen mode.
* **`document.fullscreenElement`**: Returns the element currently in fullscreen mode, or `null`.

```javascript
function toggleFullscreen(element) {
    if (!document.fullscreenElement) {
        element.requestFullscreen().catch(err => {
            console.error("Error attempting to enable fullscreen:", err.message);
        });
    } else {
        document.exitFullscreen();
    }
}
```

---

## 🛠️ Exercises for Topic 18

Open your `script.js` file in this folder and complete the following tasks:

1. **Exercise 1 (Toggle Fullscreen Function):**
   - Write a helper function `toggleFullscreen(el)` that triggers fullscreen on an element if it isn't already active.

2. **Exercise 2 (Fullscreen Event Listener):**
   - Listen for `"fullscreenchange"` events on the document and log whether fullscreen mode is currently enabled or disabled.

3. **Exercise 3 (Fullscreen Card UI Demo):**
   - Create a styled box or image container inside `#ui-sandbox` with a "Go Fullscreen" button that expands the element to fill the screen.
