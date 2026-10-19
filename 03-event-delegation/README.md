# 📚 Topic 03: Event Delegation

## 🧠 Theory & Concepts

### 1. What is Event Delegation?
Instead of adding event listeners to multiple individual child elements (which is inefficient and fails for dynamically added items), you attach a single event listener to a common parent element. 
When an event fires on a child, it **bubbles up** to the parent, where you can inspect `event.target` to figure out which child was interacted with.

```javascript
const list = document.querySelector("#my-list");

list.addEventListener("click", function(event) {
    if (event.target && event.target.matches("li")) {
        console.log("Clicked item:", event.target.textContent);
    }
});
```

### 2. Benefits of Event Delegation
* **Memory Efficiency**: Only one event listener is attached instead of hundreds.
* **Dynamic Elements**: Automatically works for elements added to the DOM *after* the listener was attached.

---

## 🛠️ Exercises for Topic 03

Open your `script.js` file in this folder and complete the following tasks:

1. **Exercise 1 (Delegated List Clicker):**
   - Create a `<ul>` with 3 initial `<li>` items and append it to `#ui-sandbox`. Attach a click listener to the `<ul>` that logs the text of whichever `<li>` is clicked.

2. **Exercise 2 (Dynamic Element Delegation):**
   - Add an "Add Item" button. When clicked, it dynamically adds a new `<li>` to the list. Because of event delegation, clicking the new item should work automatically without adding new listeners!

3. **Exercise 3 (Action Delegation - Delete Button):**
   - Add a delete button inside each list item. Use event delegation on the parent container to remove the parent `<li>` when its delete button is clicked.
