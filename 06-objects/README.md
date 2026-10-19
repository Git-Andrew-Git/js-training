# 📚 Module 6: Objects & JSON

## 🧠 Theory & Concepts

### 1. Object Literals
Objects store key-value pairs (properties and methods).
```javascript
const user = {
    name: "Alice",
    age: 25,
    isOnline: true,
    greet() {
        return `Hello, my name is ${this.name}`;
    }
};
```
* Accessing properties: Dot notation (`user.name`) or Bracket notation (`user["name"]`).

### 2. Nested Objects
Objects can contain other objects or arrays.
```javascript
const student = {
    name: "Bob",
    address: {
        city: "New York",
        zip: "10001"
    },
    grades: [90, 85, 92]
};
console.log(student.address.city); // "New York"
```

### 3. JSON (JavaScript Object Notation)
A lightweight data-interchange format derived from JS objects.
* **`JSON.stringify(obj)`**: Converts a JavaScript object into a JSON string (for sending to a server).
* **`JSON.parse(jsonString)`**: Converts a JSON string back into a JavaScript object (when receiving data from a server).

---

## 🛠️ Exercises for Module 6

Open your `script.js` file in this folder and complete the following tasks:

1. **Exercise 1 (Object Creation & Methods):**
   - Create an object `car` with properties `brand`, `model`, `year`, and a method `getSummary()` that returns a sentence about the car.

2. **Exercise 2 (Nested Objects & Arrays):**
   - Create a `userProfile` object that has nested `profile` (bio, website) and `skills` (array of strings). Access and print one of the skills.

3. **Exercise 3 (JSON Serialization):**
   - Take an object, convert it to a JSON string using `JSON.stringify()`, then parse it back into an object using `JSON.parse()`. Print both.
