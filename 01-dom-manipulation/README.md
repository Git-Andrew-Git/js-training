# 📚 Topic 01: DOM Manipulation Utility

## 🧠 Theory & Concepts

### 1. Advanced DOM Manipulation
Beyond basic selection, robust applications require dynamic element factories, attribute mutation observers, and deep DOM tree traversal helpers.
* **`document.createDocumentFragment()`**: A lightweight container used to hold multiple DOM nodes before appending them to the live DOM all at once, avoiding expensive browser reflows/repaints.
* **Element Traversal**: Using properties like `parentElement`, `children`, `nextElementSibling`, and `previousElementSibling` to navigate the DOM tree programmatically.

### 2. Attribute & Class Mutation Helpers
Writing reusable wrapper functions for creating elements with predefined classes, attributes, and event listeners makes UI generation clean and maintainable.

---

## 🛠️ Exercises for Topic 01

Open your `script.js` file in this folder and complete the following tasks:

1. **Exercise 1 (DOM Element Factory Function):**
   - Write a helper function `createElement(tag, attributes = {}, children = [])` that creates an HTML element, sets its attributes (like `class`, `id`, `textContent`), and appends child elements.

2. **Exercise 2 (DocumentFragment Performance):**
   - Create a function that generates 50 list items (`<li>`) inside a `DocumentFragment` and appends them to a `<ul>` in `#ui-sandbox` in a single operation.

3. **Exercise 3 (DOM Tree Traversal):**
   - Select a container element, traverse its parent and children nodes, and log their tag names to the console.
