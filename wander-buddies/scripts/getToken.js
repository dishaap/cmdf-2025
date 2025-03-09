const admin = require("firebase-admin");
require("dotenv").config({ path: ".env.local" }); // Load .env.local
const fs = require("fs");

// Load Firebase Admin credentials from the JSON file
const serviceAccount = JSON.parse(
  fs.readFileSync(process.env.FIREBASE_ADMIN_KEY_PATH, "utf8")
);

// Initialize Firebase Admin if not already initialized
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

// Function to generate a Firebase custom token
async function generateToken(uid) {
  try {
    const token = await admin.auth().createCustomToken(uid);
    console.log("Generated Custom Token:", token);
    return token;
  } catch (error) {
    console.error("Error generating token:", error);
  }
}

// Run the function with a test UID
const testUID = "test-user-123";
generateToken(testUID);
