// pages/api/activities.js
import pool from "@/lib/db"; // Assuming you have your DB connection set up

export default async function handler(req, res) {
  try {
    // Query the database to fetch all activity details
    const result = await pool.query('SELECT * FROM activity');
    const activities = result.rows; // Assuming your table name is "activities"

    // Return the activities as JSON
    res.status(200).json({ activities });
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
}