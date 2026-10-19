# 📚 Topic 30: SMS Auth Simulator (OTP Gateway)

## 🧠 Theory & Concepts

### 1. Two-Factor Authentication (2FA) & OTP Flow
SMS-based One-Time Password (OTP) authentication is widely used for secure logins. The authentication flow consists of three main steps:
1. **Request OTP**: User enters phone number/email; server generates a random 4-6 digit code and sends it via SMS gateway (simulated here with `setTimeout`).
2. **Verify OTP**: User enters the received code; client/server verifies if it matches and hasn't expired.
3. **Session Issuance**: Upon successful verification, an auth token or session is granted.

---

## 🛠️ Exercises for Topic 30

Open your `script.js` file in this folder and complete the following tasks:

1. **Exercise 1 (OTP Generator & Sender Simulation):**
   - Write a function `sendOTP(phoneNumber)` that generates a random 6-digit code and simulates sending it via an async delay.

2. **Exercise 2 (OTP Verification Service):**
   - Write a function `verifyOTP(inputCode, actualCode)` that checks validity and expiration time (e.g., within 2 minutes).

3. **Exercise 3 (SMS Auth Simulator Widget UI):**
   - Build a complete 2FA login simulator widget in `#ui-sandbox`: step 1 (enter phone & request code), step 2 (enter 6-digit OTP code & verify), and step 3 (logged-in dashboard view).
