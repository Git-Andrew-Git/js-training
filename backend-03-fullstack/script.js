// ==========================================
// BACKEND MODULE 3: Full-Stack Connection
// ==========================================
// Run this script using: node backend-03-fullstack/script.js

console.log("🚀 Full-Stack Backend Module loaded!");

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// In-Memory Database Store
let items = [
    { id: 1, title: "Full-stack item 1" },
    { id: 2, title: "Full-stack item 2" }
];

// --- EXERCISE 1: GET API Route ---
// TODO: Create GET /api/items to return items.



// --- EXERCISE 2: POST API Route ---
// TODO: Create POST /api/items to add a new item.



// --- EXERCISE 3: DELETE API Route ---
// TODO: Create DELETE /api/items/:id to remove an item by id.



// Start Server
app.listen(PORT, () => {
    console.log(`🌍 Full-Stack Server running at http://localhost:${PORT}`);
});
