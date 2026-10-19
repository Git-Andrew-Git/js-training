# 📚 Topic 08: URL Query Parser Utility

## 🧠 Theory & Concepts

### 1. Handling URL Query Parameters
URL query parameters are key-value pairs appended to the end of a URL after a question mark (`?search=javascript&page=2&sort=latest`).
* **`URLSearchParams` API**: The native browser API for parsing, adding, removing, and updating query parameters cleanly without manual string splitting.

```javascript
const queryString = "?name=Alice&role=admin";
const params = new URLSearchParams(queryString);

console.log(params.get("name")); // "Alice"
params.set("page", 1);
console.log(params.toString()); // "name=Alice&role=admin&page=1"
```

---

## 🛠️ Exercises for Topic 08

Open your `script.js` file in this folder and complete the following tasks:

1. **Exercise 1 (Query String to Object Parser):**
   - Write a function `parseQueryParams(urlOrQueryString)` that extracts query parameters using `URLSearchParams` and returns them as a plain JavaScript object.

2. **Exercise 2 (Object to Query String Builder):**
   - Write a function `buildQueryString(paramObject)` that takes an object of filters and converts it into a valid query string (`?key=val&...`).

3. **Exercise 3 (URL Query Manager UI):**
   - Create an interactive UI in `#ui-sandbox` where users can type key-value pairs, add them to the URL search params, and view the updated URL query string in real time.
