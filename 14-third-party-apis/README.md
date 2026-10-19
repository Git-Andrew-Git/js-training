# 📚 Module 14: Working with Third-Party APIs

## 🧠 Theory & Concepts

### 1. What are Third-Party APIs?
Third-party APIs are services hosted by external providers (e.g., Weather APIs, GitHub, OpenAI, Currency Converters) that allow your application to request data or perform actions securely over the internet using HTTP requests.

### 2. Authentication & API Keys
Many third-party APIs require authentication to track usage and prevent abuse.
* **API Keys**: A unique secret string passed via query parameters (`?api_key=XYZ`) or HTTP headers (`Authorization: Bearer XYZ`).
* **CORS (Cross-Origin Resource Sharing)**: A browser security mechanism that restricts web pages from making requests to a different domain unless the server explicitly allows it.

### 3. Handling Query Parameters & URL Building
When fetching from search APIs, you often need to construct dynamic query strings safely using `URLSearchParams`.
```javascript
const params = new URLSearchParams({ search: "javascript", limit: 5 });
const url = `https://api.example.com/items?${params.toString()}`;
```

---

## 🛠️ Exercises for Module 14

Open your `script.js` file in this folder and complete the following tasks:

1. **Exercise 1 (Query Parameters):**
   - Use `URLSearchParams` to build a query URL for a public search API (e.g., Open Library API: `https://openlibrary.org/search.json?q=javascript`), fetch the results, and log the first book title.

2. **Exercise 2 (Handling API Errors & Status Codes):**
   - Write an async function that fetches from an invalid URL or simulates an error response. Check `response.ok` and throw a custom error if `!response.ok`, catching it in a `try/catch` block.

3. **Exercise 3 (Mini Weather / Data Search Dashboard):**
   - Create an input field and a search button in `#ui-sandbox`. When the user types a search term (e.g., a country or book) and clicks search, fetch data from a public API and render the results dynamically on the page.
