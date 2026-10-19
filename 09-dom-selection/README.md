# 📚 Module 9: DOM Selection & Modification

## 🧠 Theory & Concepts

### 1. Selecting Elements from the DOM
The Document Object Model (DOM) is the bridge between JavaScript and HTML.
* **`document.getElementById("id")`**: Selects a single element by its ID.
* **`document.querySelector(".class" or "#id" or "tag")`**: Selects the first matching element using CSS selectors.
* **`document.querySelectorAll(".class")`**: Selects *all* matching elements as a NodeList.

### 2. Modifying Content & Attributes
* **`element.textContent`**: Changes or reads the text inside an element.
* **`element.innerHTML`**: Changes or reads HTML markup inside an element.
* **`element.setAttribute("attr", "value")` / `element.getAttribute()`**: Modifies or reads HTML attributes (like `src`, `href`, `class`).

### 3. Styling & Class Manipulation
* **`element.style.property = "value"`**: Modifies inline CSS styles directly.
* **`element.classList.add("className")` / `remove()` / `toggle()`**: Cleanest way to add, remove, or toggle CSS classes.

---

## 🛠️ Exercises for Module 9

Open your `script.js` file in this folder and complete the following tasks:

1. **Exercise 1 (Selecting Elements):**
   - Use `querySelector` to select the main heading (`<h1>`) or output container in your `index.html` and log it.

2. **Exercise 2 (Modifying Text & HTML):**
   - Create a dynamic `<h2>` or paragraph element using JavaScript (`document.createElement`), set its `textContent` to "Hello from Module 9!", and append it to the `#ui-sandbox` container in `index.html`.

3. **Exercise 3 (Class Toggle & Styling):**
   - Add a click event or direct modification to change the background color or add a CSS class to your created element.
