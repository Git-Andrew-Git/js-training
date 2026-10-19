# 📚 Project 1: Interactive Productivity App (Todo List & Task Manager)

## 🧠 Theory & Concepts

### 1. Building a Complete Front-End Application
Combining everything you've learned (DOM manipulation, event handling, ES6 features, `localStorage`, and event delegation), a task manager app requires:
* **State Management**: Storing tasks in a reactive JavaScript array (`tasks = []`).
* **Persistence**: Saving state to `localStorage` on every change so tasks aren't lost on refresh.
* **Filtering & Rendering**: Dynamically rendering tasks based on filters (All, Active, Completed).

---

## 🛠️ Requirements & Instructions

Open your `script.js` file in this folder and build a fully functional Task Manager app inside `#ui-sandbox`:
1. **Task Input**: An input field and "Add Task" button to create new tasks.
2. **Task List View**: Renders tasks dynamically with checkboxes (to toggle completion status) and delete buttons.
3. **Filtering**: Buttons for "All", "Active", and "Completed" tasks.
4. **LocalStorage Persistence**: Tasks persist across page reloads using `localStorage`.
