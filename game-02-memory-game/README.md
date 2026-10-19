# 📚 Game 2: Memory Card Matching Game

## 🧠 Theory & Concepts

### 1. Grid Manipulation & State Machine Logic
Building a card matching game requires:
* **Grid Generation**: Dynamically creating a grid of card elements from an array of icons or numbers.
* **State Management**: Tracking flipped cards, matched pairs, moves count, and game completion status.
* **Timer / Move Counter**: Evaluating user performance.

---

## 🛠️ Requirements & Instructions

Open your `script.js` file in this folder and build an interactive Memory Card Matching game inside `#ui-sandbox`:
1. **Card Grid**: A 4x4 or 3x4 grid of face-down cards.
2. **Flip & Match Logic**: Clicking a card reveals its symbol. Clicking a second card checks if they match. If they match, they stay face up; if not, they flip back after a short delay (`setTimeout`).
3. **Win Condition**: Displays a victory message and score when all pairs are successfully matched.
