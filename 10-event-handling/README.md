# 📚 Module 10: Event Handling

## 🧠 Theory & Concepts

### 1. The `addEventListener` Method
Events are actions that happen in the browser (clicks, keypresses, submits, scrolling). `addEventListener` attaches an event handler function to an element.
```javascript
const button = document.querySelector("#my-button");

button.addEventListener("click", function(event) {
    console.log("Button was clicked!", event);
});
```

### 2. Common Event Types
* **Mouse Events**: `"click"`, `"dblclick"`, `"mouseenter"`, `"mouseleave"`
* **Keyboard Events**: `"keydown"`, `"keyup"`
* **Form Events**: `"submit"`, `"input"`, `"change"`
* **Window Events**: `"resize"`, `"scroll"`, `"load"`

### 3. Preventing Default Behavior & Event Bubbling
* **`event.preventDefault()`**: Stops the default browser action (e.g., stops a form from refreshing the page on submit).
* **Event Bubbling**: Events bubble up from the target element through its ancestors. Use `event.stopPropagation()` if needed, or use **Event Delegation** (handling events on a parent container for dynamically created children).

---

## 🛠️ Exercises for Module 10

Open your `script.js` file in this folder and complete the following tasks:

1. **Exercise 1 (Click Event & Counter):**
   - Create a button dynamically, append it to `#ui-sandbox`, and add a click listener that increments and displays a click counter.

2. **Exercise 2 (Input Event):**
   - Create an `<input type="text">` element and append it to `#ui-sandbox`. Add an `"input"` event listener that mirrors whatever the user types into a paragraph tag below it in real time.

3. **Exercise 3 (Form Submit & Prevent Default):**
   - Create a simple form with an input and submit button. Add a submit listener that calls `event.preventDefault()` and logs the entered value without reloading the page.
