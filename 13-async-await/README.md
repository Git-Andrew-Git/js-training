# 📚 Module 13: Async/Await & Fetch API

## 🧠 Theory & Concepts

### 1. `async / await` Syntax
`async/await` is syntactic sugar built on top of Promises, making asynchronous code look and behave more like synchronous code, making it much easier to read and write.
* Mark a function with `async`.
* Use `await` before any Promise-based operation to pause execution until the promise settles.

```javascript
async function getUser() {
    try {
        const response = await fetch("https://api.github.com/users/octocat");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Failed to fetch:", error);
    }
}
```

### 2. The Fetch API
The built-in `fetch()` method is used to make HTTP requests (GET, POST, etc.) to servers and APIs. It returns a Promise that resolves to the `Response` object.
* **`response.json()`**: Parses the response body as JSON (also returns a Promise).

### 3. Error Handling with `try / catch`
When using `await`, wrap your code in a `try...catch` block to gracefully handle network errors or failed requests.

---

## 🛠️ Exercises for Module 13

Open your `script.js` file in this folder and complete the following tasks:

1. **Exercise 1 (Basic Fetch GET Request):**
   - Use `fetch()` to get data from a public API (e.g., `https://jsonplaceholder.typicode.com/posts/1`). Convert it to JSON and log the title.

2. **Exercise 2 (Async/Await with Try/Catch):**
   - Rewrite Exercise 1 using an `async` function and `await` inside a `try...catch` block.

3. **Exercise 3 (Displaying API Data in UI):**
   - Fetch a random user or joke from a public API and display it dynamically inside the `#ui-sandbox` container on your webpage.
