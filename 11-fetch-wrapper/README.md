# 📚 Topic 11: Custom Fetch Wrapper Utility

## 🧠 Theory & Concepts

### 1. Why Build a Fetch Wrapper?
Native `fetch()` is powerful, but repetitive when dealing with JSON conversion, base URLs, custom headers (like auth tokens), query parameters, and timeout handling. A custom Fetch Wrapper encapsulates these repetitive tasks into a clean, reusable service.

```javascript
class ApiClient {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    async get(endpoint) {
        const response = await fetch(`${this.baseURL}${endpoint}`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    }
}
```

---

## 🛠️ Exercises for Topic 11

Open your `script.js` file in this folder and complete the following tasks:

1. **Exercise 1 (API Client Class):**
   - Implement an `ApiClient` class with a base URL and methods for `get(endpoint)` and `post(endpoint, data)` that automatically parse JSON and handle basic error throwing.

2. **Exercise 2 (Timeout Interceptor):**
   - Add a timeout mechanism using `AbortController` so that fetch requests abort automatically if they take longer than a specified number of milliseconds.

3. **Exercise 3 (API Client UI Demo):**
   - Use your `ApiClient` inside `#ui-sandbox` to fetch and display posts or users from a public test API (`https://jsonplaceholder.typicode.com`).
