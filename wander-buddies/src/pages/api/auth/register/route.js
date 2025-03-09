import { NextResponse } from "next/server";
import pool from "@/app/lib/db";

export async function POST(req) {
  try {
    const { username, email, profilePic } = await req.json();

    if (!username || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const result = await pool.query(
      "INSERT INTO Users (username, email, profilepic) VALUES ($1, $2, $3) RETURNING *",
      [username, email, profilePic]
    );

    return NextResponse.json({ user: result.rows[0] }, { status: 201 });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
