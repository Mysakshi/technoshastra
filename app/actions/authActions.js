"use server";

import db from "@/lib/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET || "TechnoshastraX_super_secure_secret_key_2026";

export async function loginAdmin(username, password) {
  try {
    const trimmedUsername = username?.trim();
    const trimmedPassword = password?.trim();

    console.log(`Login attempt for username: "${trimmedUsername}"`);

    const [rows] = await db.query("SELECT * FROM users WHERE username = ?", [trimmedUsername]);
    const user = rows[0];

    if (!user) {
      console.log(`User "${trimmedUsername}" not found.`);
      return { success: false, error: "Invalid credentials." };
    }

    const passwordMatch = await bcrypt.compare(trimmedPassword, user.password_hash);

    if (!passwordMatch) {
      console.log(`Password mismatch for user: "${trimmedUsername}"`);
      return { success: false, error: "Invalid credentials." };
    }

    // Create JWT Token
    const token = jwt.sign(
      { userId: user.id, username: user.username, role: user.role },
      JWT_SECRET,
      { expiresIn: "8h" }
    );

    // Set HTTP-Only Cookie
    const cookieStore = await cookies();
    cookieStore.set("TechnoshastraX_admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 8, // 8 hours
      path: "/",
    });

    return { success: true };
  } catch (error) {
    console.error("Login error:", error);
    return { success: false, error: "An unexpected error occurred." };
  }
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  cookieStore.delete("TechnoshastraX_admin_token");
  return { success: true };
}
