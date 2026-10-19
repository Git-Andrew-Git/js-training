# 📚 Module 2: Control Flow & Logic

## 🧠 Theory & Concepts

### 1. `if / else if / else` Statements
Control flow allows your program to make decisions based on different conditions.
```javascript
const score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 75) {
    console.log("Grade: B");
} else {
    console.log("Grade: Needs Improvement");
}
```

### 2. The Switch Statement
Best used when comparing a single variable against many fixed options (cleaner than multiple `if/else if` blocks).
```javascript
const day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the work week!");
        break;
    case "Friday":
        console.log("Almost weekend!");
        break;
    default:
        console.log("Just another day.");
}
```

### 3. Ternary Operator (`condition ? ifTrue : ifFalse`)
A shorthand way of writing simple `if/else` statements, especially when assigning values.
```javascript
const age = 20;
const canDrive = age >= 18 ? "Yes, can drive" : "No, too young";
```

### 4. Truthy & Falsy Values
In JavaScript, values evaluate to `true` or `false` in conditional contexts.
* **Falsy values** (evaluate to `false`): `false`, `0`, `""` (empty string), `null`, `undefined`, `NaN`.
* **Truthy values**: Everything else! (`true`, non-empty strings, numbers other than 0, objects, arrays).

---

## 🛠️ Exercises for Module 2

Open your `script.js` file in this folder and complete the following tasks:

1. **Exercise 1 (If/Else Decision Maker):**
   - Create a variable `temperature`.
   - Write an `if/else if/else` structure:
     - If temperature > 30, print "It's hot outside ☀️"
     - If temperature is between 15 and 30, print "Weather is nice 🌤️"
     - Else, print "It's cold outside ❄️"

2. **Exercise 2 (Ternary Operator):**
   - Create a variable `isLoggedIn = true;`.
   - Use the ternary operator to set a variable `userMessage` to "Welcome back!" if true, and "Please log in." if false. Print `userMessage`.

3. **Exercise 3 (Switch Statement):**
   - Create a variable `userRole` ("admin", "editor", or "subscriber").
   - Use a `switch` statement to print a custom welcome message depending on the role.
