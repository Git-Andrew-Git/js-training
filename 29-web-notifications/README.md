# 📚 Topic 29: Web Notifications API Utility

## 🧠 Theory & Concepts

### 1. Browser Push Notifications API
The Notifications API allows web applications to display system-level notifications to the user outside the browser window (even when the tab is in the background).
* **Permission Request**: `Notification.requestPermission()` prompts the user for permission (`"granted"`, `"denied"`, or `"default"`).
* **Creating a Notification**: `new Notification("Title", { body: "Message", icon: "..." })`.

```javascript
async function sendNotification(title, options) {
    if (Notification.permission === "granted") {
        new Notification(title, options);
    } else if (Notification.permission !== "denied") {
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
            new Notification(title, options);
        }
    }
}
```

---

## 🛠️ Exercises for Topic 29

Open your `script.js` file in this folder and complete the following tasks:

1. **Exercise 1 (Permission Request Helper):**
   - Write an async function `requestNotificationPermission()` that checks and requests user permission.

2. **Exercise 2 (Send Notification Function):**
   - Write a function `showNotification(title, body)` that triggers a desktop push notification if permitted.

3. **Exercise 3 (Notification Trigger UI):**
   - Create a button in `#ui-sandbox` labeled "Enable Notifications" and another labeled "Trigger Notification" to test the flow.
