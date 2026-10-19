# 📚 Backend Module 3: Full-Stack Connection (Frontend + Express + Database)

## 🧠 Theory & Concepts

### 1. Connecting Frontend to Backend
A true Full-Stack application connects your browser frontend (`index.html` + `script.js`) to your backend server (`Express.js`) using the `fetch()` API.
* **CORS (Cross-Origin Resource Sharing)**: When your frontend runs on `http://127.0.0.1` and your backend on `http://localhost:3000`, the browser blocks requests unless the Express server enables CORS.

```javascript
const cors = require('cors');
app.use(cors());
```

---

## 🛠️ Requirements & Instructions

Open your `script.js` file in this folder and complete the following tasks:
1. **Express Full-Stack Server**: Create an Express server with `express.json()` and `cors()` middleware.
2. **Full CRUD API**: Implement `GET`, `POST`, and `DELETE` routes for a resource (like notes or tasks).
3. **Frontend Integration**: Update your frontend to fetch data from your Express backend API and render it live on the webpage!
