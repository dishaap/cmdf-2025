import { NextResponse } from "next/server";
import pool from "@/app/lib/db";

export async function POST(req) {
  try {
    const { userId } = await req.json();

    if (!userId) {
      return NextResponse.json({ error: "Missing user ID" }, { status: 400 });
    }

    const client = await pool.connect();
    const res = await client.query("SELECT * FROM Users WHERE Email = $1", [userId]);
    client.release();

    if (res.rows.length > 0) {
      return NextResponse.json({ user: res.rows[0] }, { status: 200 });
    } else {
      return NextResponse.json({ error: "User not found in database" }, { status: 404 });
    }
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
