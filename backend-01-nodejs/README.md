# 📚 Backend Module 1: Node.js Basics & File System

## 🧠 Theory & Concepts

### 1. What is Node.js?
Node.js is a runtime environment that allows you to execute JavaScript outside the browser (on your computer or server), powered by Google Chrome's V8 JavaScript engine.

### 2. Core Built-In Modules
Node.js comes with powerful built-in modules that don't require external installation:
* **`fs` (File System)**: Read, write, update, and delete files on your computer.
* **`path`**: Utilities for working with file and directory paths.
* **`http`**: Builds low-level web servers.

```javascript
const fs = require('fs');

// Writing a file synchronously
fs.writeFileSync('output.txt', 'Hello from Node.js!');

// Reading a file
const data = fs.readFileSync('output.txt', 'utf8');
console.log(data);
```

---

## 🛠️ Requirements & Instructions

Open your `script.js` file in this folder and complete the following tasks:
1. **File System Operations**: Write a script that creates a text file, appends data to it, reads it back, and prints the contents to the terminal using `node script.js`.
2. **Path Utilities**: Use the `path` module to resolve and print absolute file paths.
