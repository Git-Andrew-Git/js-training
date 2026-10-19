# 📚 Game 3: HTML5 Canvas Arcade Game (Catch the Falling Objects / Pong)

## 🧠 Theory & Concepts

### 1. The HTML5 Canvas API
Unlike standard DOM elements, the `<canvas>` element provides a bitmap drawing surface controlled entirely via JavaScript drawing contexts (`getContext("2d")`).
* **Game Loop (`requestAnimationFrame`)**: A continuous loop that clears the canvas, updates object positions (movement/physics), and redraws everything 60 times per second.
* **Collision Detection**: Mathematical checks (bounding box collision) to detect when objects intersect.

---

## 🛠️ Requirements & Instructions

Open your `script.js` file in this folder and build an HTML5 Canvas game inside `#ui-sandbox`:
1. **Canvas Setup**: Create a `<canvas>` element dynamically, set its width and height, and get its 2D rendering context.
2. **Game Objects**: Render a player paddle controlled by arrow keys or mouse movement, and falling items (or bouncing ball).
3. **Game Loop**: Implement `requestAnimationFrame` for smooth 60 FPS animation, collision detection, and score keeping.
