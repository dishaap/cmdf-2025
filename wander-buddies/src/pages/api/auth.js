import pool from "@/lib/db";
import { verifyIdToken } from "@/lib/firebaseAdmin";

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

  // Extract token from authorization header
  const token = req.headers.authorization?.split("Bearer ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized, no token" });

  try {
    // Verify and decode the token
    const decodedToken = await verifyIdToken(token);
    if (!decodedToken) return res.status(401).json({ error: "Invalid Token" });

    const { uid, email } = decodedToken;

    // Insert the user into the database or do nothing if already exists
    await pool.query(
      "INSERT INTO users (UserId, Email) VALUES ($1, $2) ON CONFLICT (UserId) DO NOTHING",
      [uid, email]
    );

    // Respond with success message
    return res.status(200).json({ message: "User synced successfully" });

  } catch (error) {
    console.error("Error in authentication process:", error);
    
    // Handle errors (invalid token, database error, etc.)
    if (error.code === 'ECONNREFUSED') {
      return res.status(500).json({ error: "Database connection failed" });
    }

    return res.status(500).json({ error: "An error occurred during the authentication process" });
  }
}
