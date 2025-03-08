import pool from "@/lib/db";
import { verifyIdToken } from "@/lib/firebaseAdmin";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

  const token = req.headers.authorization?.split("Bearer ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  const decodedToken = await verifyIdToken(token);
  if (!decodedToken) return res.status(401).json({ error: "Invalid Token" });

  const { uid, email } = decodedToken;

  try {
    await pool.query(
      "INSERT INTO users (UserId, Email) VALUES ($1, $2) ON CONFLICT (UserID) DO NOTHING",
      [uid, email]
    );
    return res.status(200).json({ message: "User synced successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Database error" });
  }
}
