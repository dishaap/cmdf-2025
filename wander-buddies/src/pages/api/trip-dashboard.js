// /pages/api/trip-dashboard.js
import pool from "@/lib/db";

export default async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { userID } = req.query; // Extract userID from the query

    if (!userID) {
        return res.status(400).json({ error: "Missing userID parameter" });
    }

    try {
        const result = await pool.query(`
            SELECT t.*
            FROM Trip t
            JOIN UseronTrip ut ON t.tripid = ut.tripid
            WHERE ut.usergoing = $1
        `, [userID]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "No trips found for the user" });
        }

        return res.status(200).json({ trips: result.rows });
    } catch (error) {
        console.error("Database error:", error);
        return res.status(500).json({ error: "Database error" });
    }
}
