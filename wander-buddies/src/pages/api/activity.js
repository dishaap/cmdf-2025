import pool from "@/lib/db"; 

export default async function handler(req, res) {
    if (req.method !== "GET") return res.status(405).send("Method Not Allowed");

    const { activityId } = req.query; // Extract activityId from request

    if (!activityId) {
        return res.status(400).json({ error: "Missing activityId parameter" });
    }

    try {
        const result = await pool.query(`
            SELECT 
                a.ActivityID, a.ActivityName, a.ActivityLoc, 
                a.StartDate, a.EndDate, a.Budget, a.Description, 
                a.Deadline, u.Username AS TripPlanner,
                COALESCE(json_agg(json_build_object(
                    'username', ru.Username, 
                    'status', r.Status
                )) FILTER (WHERE ru.UserID IS NOT NULL), '[]') AS RSVPs
            FROM Activity a
            LEFT JOIN Users u ON a.TripPlanner = u.UserID
            LEFT JOIN RSVPActivity r ON a.ActivityID = r.Activity
            LEFT JOIN Users ru ON r.UserGoing = ru.UserID
            WHERE a.ActivityID = $1
            GROUP BY a.ActivityID, u.Username
        `, [activityId]);  

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Activity not found" });
        }

        return res.status(200).json({ activity: result.rows[0] });
    } catch (error) {
        console.error("Database error:", error);
        return res.status(500).json({ error: "Database error" });
    }
}
