# 📚 Backend Module 2: Express.js Server & Routing

## 🧠 Theory & Concepts

### 1. What is Express.js?
Express is a minimal, fast, and flexible web framework for Node.js. It simplifies building robust web servers, REST APIs, handling routing, and managing middleware.

### 2. Basic Express Server Setup
```javascript
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// GET Route
app.get('/api/hello', (req, res) => {
    res.json({ message: "Hello from Express API!" });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
```

---

## 🛠️ Requirements & Instructions

Open your `script.js` file in this folder and complete the following tasks:
1. **Express Server**: Set up an Express application that listens on port `3000`.
2. **REST Endpoints**:
   - `GET /api/todos`: Returns a mock array of todo items.
   - `POST /api/todos`: Accepts a new todo item in `req.body` and adds it to the list.
3. **Running the Server**: Run your server using `node backend-02-express/script.js` and test it using your browser or a tool like Postman / cURL.
