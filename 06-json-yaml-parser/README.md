# 📚 Topic 06: JSON & YAML Parser Utility

## 🧠 Theory & Concepts

### 1. Structured Data Parsing
Applications often need to process structured configuration data in formats like JSON and YAML.
* **JSON**: Native to JavaScript (`JSON.parse()` / `JSON.stringify()`).
* **YAML**: Human-readable data serialization format often used in config files (front matter in markdown, CI/CD pipelines, etc.). Since browsers don't have a built-in YAML parser, developers write custom helpers or use lightweight parsers.

### 2. Custom Key-Value Config Parser
For training purposes, we can write a simple key-value config parser that reads structured text and converts it into a JavaScript object.

---

## 🛠️ Exercises for Topic 06

Open your `script.js` file in this folder and complete the following tasks:

1. **Exercise 1 (JSON Safe Parser):**
   - Write a function `safeJsonParse(str)` wrapped in a `try/catch` block that parses a JSON string or returns a fallback object if parsing fails.

2. **Exercise 2 (Simple Key-Value Config Parser):**
   - Write a parser function that takes a multi-line string of key-value pairs (`host = localhost`, `port = 8080`) and converts it into a JS object.

3. **Exercise 3 (Config UI Viewer):**
   - Create a textarea in `#ui-sandbox` where a user can paste JSON config text, click a "Parse" button, and view the formatted object output.
