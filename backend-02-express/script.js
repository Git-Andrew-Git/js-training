// ==========================================
// BACKEND MODULE 2: Express.js Server
// ==========================================
// Run this script in your terminal using: node backend-02-express/script.js
// (Make sure to run 'npm init -y' and 'npm install express' first if needed!)

console.log("🚀 Express.js Backend Module loaded!");

const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Mock Data Store
let todos = [
    { id: 1, text: "Learn Node.js", completed: false },
    { id: 2, text: "Build Express API", completed: true }
];

// --- EXERCISE 1: GET Route ---
// TODO: Create a GET endpoint at '/api/todos' that returns the todos array as JSON.



// --- EXERCISE 2: POST Route ---
// TODO: Create a POST endpoint at '/api/todos' that takes req.body.text, creates a new todo object, 
// pushes it to the array, and returns the created todo.



// --- EXERCISE 3: Start Server ---
// TODO: Call app.listen(PORT, ...) and log a startup message.
