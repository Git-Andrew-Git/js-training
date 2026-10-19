# 📚 Topic 21: Client-Side JWT Decoder Utility

## 🧠 Theory & Concepts

### 1. What is a JWT (JSON Web Token)?
A JWT is a compact, URL-safe token format used for securely transmitting information between parties. It consists of three parts separated by dots (`.`):
1. **Header**: Algorithm and token type.
2. **Payload**: User data and claims (permissions, expiration).
3. **Signature**: Cryptographic signature used to verify the token hasn't been tampered with.

### 2. Client-Side Decoding vs. Verification
While *verifying* a signature requires the server's secret key, the **payload** can be easily decoded on the client side using standard Base64 decoding (`atob()`) to inspect user info or expiration timestamps.

```javascript
function decodeJWT(token) {
    const parts = token.split('.');
    if (parts.length !== 3) throw new Error("Invalid JWT format");
    
    const payload = parts[1];
    // Decode Base64Url to Base64, then decode string to JSON
    const decodedPayload = atob(payload.replace(/-/g, '+').replace(/_/g, '/'));
    return JSON.parse(decodedPayload);
}
```

---

## 🛠️ Exercises for Topic 21

Open your `script.js` file in this folder and complete the following tasks:

1. **Exercise 1 (JWT Payload Decoder):**
   - Write a function `decodeJWT(token)` that splits a JWT string, decodes the payload base64 part using `atob()`, and parses it into a JavaScript object.

2. **Exercise 2 (Token Expiration Check):**
   - Write a function `isTokenExpired(tokenPayload)` that checks the `exp` claim against `Date.now()` to determine if the token has expired.

3. **Exercise 3 (JWT Inspector UI):**
   - Create a textarea in `#ui-sandbox` where a user can paste a JWT token, click "Decode", and view the structured header and payload data formatted nicely on the page.
