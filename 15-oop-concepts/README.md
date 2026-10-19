# 📚 Module 15: Object-Oriented Programming (OOP) in JavaScript

## 🧠 Theory & Concepts

### 1. Constructor Functions & Prototypes (Pre-ES6)
Before ES6 classes, JavaScript used constructor functions to create objects with shared methods via prototypes.
```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayHello = function() {
    return `Hello, I am ${this.name}`;
};
```

### 2. ES6 `class` Syntax
ES6 introduced class syntax as clean syntactic sugar over prototype-based inheritance.
```javascript
class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    login() {
        return `${this.username} has logged in.`;
    }
}

const user1 = new User("Alice", "alice@mail.com");
```

### 3. Inheritance (`extends` & `super`)
You can create subclasses that inherit properties and methods from a parent class using `extends` and `super()`.
```javascript
class Admin extends User {
    constructor(username, email, role) {
        super(username, email);
        this.role = role;
    }

    deleteUser() {
        return `${this.username} deleted a user.`;
    }
}
```

### 4. Encapsulation (Getters, Setters & Private Fields `#`)
Private fields start with `#` and cannot be accessed from outside the class.
```javascript
class BankAccount {
    #balance = 0; // Private field

    deposit(amount) {
        this.#balance += amount;
    }

    get balance() {
        return this.#balance;
    }
}
```

---

## 🛠️ Exercises for Module 15

Open your `script.js` file in this folder and complete the following tasks:

1. **Exercise 1 (ES6 Class Creation):**
   - Create a class `Product` with constructor parameters `name`, `price`, and `category`, and a method `getDetails()` that returns a summary string. Instantiate an object and log it.

2. **Exercise 2 (Class Inheritance):**
   - Create a subclass `DigitalProduct` that extends `Product` and adds a property `fileSize` and a method `download()`.

3. **Exercise 3 (Encapsulation & Private Fields):**
   - Create a class `Wallet` with a private field `#amount`. Add methods `deposit(val)` and `withdraw(val)`, plus a getter for `#amount`. Test it.
