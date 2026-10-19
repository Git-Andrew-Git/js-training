# 📚 Topic 20: Crypto Hashing & UUID Generation Utility

## 🧠 Theory & Concepts

### 1. The Web Crypto API (`crypto.subtle`)
The modern browser `Crypto` interface provides cryptographic operations, such as hashing data (SHA-256, SHA-512) and generating cryptographically secure unique identifiers (UUIDs).
* **UUIDv4 Generation**: Universally Unique Identifiers can be generated natively using `crypto.randomUUID()`.
* **SHA-256 Hashing**: Converting plain text strings into a secure 256-bit hash using `crypto.subtle.digest()`.

```javascript
// Generate UUIDv4 natively
const uniqueId = crypto.randomUUID();

// SHA-256 Hashing
async function hashString(message) {
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}
```

---

## 🛠️ Exercises for Topic 20

Open your `script.js` file in this folder and complete the following tasks:

1. **Exercise 1 (Native UUID Generator):**
   - Write a function `generateUUID()` that utilizes `crypto.randomUUID()` to generate and return unique IDs.

2. **Exercise 2 (SHA-256 Hashing Function):**
   - Write an async function `sha256(text)` that hashes an input string using the Web Crypto API `subtle.digest()`.

3. **Exercise 3 (Hashing & UUID Tool UI):**
   - Create an interactive tool in `#ui-sandbox` with an input field, a "Generate UUID" button, and a "Hash with SHA-256" button that displays the cryptographic output in real time.
