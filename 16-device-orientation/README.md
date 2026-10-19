# 📚 Topic 16: Device Orientation & Motion Utility

## 🧠 Theory & Concepts

### 1. Device Orientation & Motion APIs
Mobile and modern devices feature built-in hardware sensors (accelerometers and gyroscopes) that detect physical tilt, rotation, and acceleration.
* **`deviceorientation`**: Fires when the device rotates (pitch, roll, yaw).
* **`devicemotion`**: Fires when acceleration changes (shake detection, movement).

```javascript
window.addEventListener("deviceorientation", event => {
    const alpha = event.alpha; // rotation around z-axis
    const beta = event.beta;   // front-to-back tilt
    const gamma = event.gamma; // left-to-right tilt
    console.log(`Tilt X: ${beta}, Tilt Y: ${gamma}`);
});
```

---

## 🛠️ Exercises for Topic 16

Open your `script.js` file in this folder and complete the following tasks:

1. **Exercise 1 (Orientation Event Listener):**
   - Check if `DeviceOrientationEvent` is supported and attach a listener to log beta and gamma tilt angles.

2. **Exercise 2 (Shake Detector):**
   - Use `devicemotion` to detect sudden acceleration spikes and log a "Device Shaken!" event.

3. **Exercise 3 (Tilt Visualizer UI):**
   - Create a box element in `#ui-sandbox` that tilts or moves on the screen in real time according to the user's device orientation angles.
