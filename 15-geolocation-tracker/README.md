# 📚 Topic 15: Geolocation Tracker Utility

## 🧠 Theory & Concepts

### 1. The HTML5 Geolocation API
The Geolocation API allows the user to provide their location to web applications. For privacy reasons, the browser prompts the user for permission before sharing location data.
* **`navigator.geolocation.getCurrentPosition(successCallback, errorCallback)`**: Retrieves the device's current geographical position.
* **`navigator.geolocation.watchPosition(...)`**: Continuously tracks position changes as the user moves.

```javascript
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
        position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            console.log(`Latitude: ${lat}, Longitude: ${lon}`);
        },
        error => console.error("Error getting location:", error.message)
    );
}
```

---

## 🛠️ Exercises for Topic 15

Open your `script.js` file in this folder and complete the following tasks:

1. **Exercise 1 (Get Current Position):**
   - Write a function `getCurrentLocation()` that checks if geolocation is available, requests the current position, and logs latitude and longitude.

2. **Exercise 2 (Calculate Distance):**
   - Write a distance helper function using the Haversine formula to calculate the distance between two latitude/longitude coordinates.

3. **Exercise 3 (Live Geolocation Dashboard UI):**
   - Create a "Get My Location" button inside `#ui-sandbox`. When clicked, display latitude, longitude, and accuracy on the webpage.
