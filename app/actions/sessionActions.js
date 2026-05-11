"use server";

import db from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

async function saveFile(file) {
  if (!file || file.size === 0) return null;

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Create unique filename
  const filename = `${Date.now()}-${file.name.replace(/\s+/g, "-")}`;
  const uploadDir = path.join(process.cwd(), "public", "uploads");
  const filePath = path.join(uploadDir, filename);

  await writeFile(filePath, buffer);
  return `/uploads/${filename}`;
}

export async function createSession(formData) {
  const title = formData.get("title");
  const description = formData.get("description");
  const session_date = formData.get("session_date");
  const imageFile = formData.get("image");

  const image_url = await saveFile(imageFile);

  await db.query(
    "INSERT INTO sessions (title, description, image_url, session_date) VALUES (?, ?, ?, ?)",
    [title, description, image_url, session_date]
  );

  revalidatePath("/admin/sessions");
  revalidatePath("/sessions");
  redirect("/admin/sessions");
}

export async function updateSession(id, formData) {
  const title = formData.get("title");
  const description = formData.get("description");
  const session_date = formData.get("session_date");
  const imageFile = formData.get("image");
  const currentImageUrl = formData.get("current_image_url");

  let image_url = currentImageUrl;
  if (imageFile && imageFile.size > 0) {
    image_url = await saveFile(imageFile);
  }

  await db.query(
    "UPDATE sessions SET title = ?, description = ?, image_url = ?, session_date = ? WHERE id = ?",
    [title, description, image_url, session_date, id]
  );

  revalidatePath("/admin/sessions");
  revalidatePath("/sessions");
  redirect("/admin/sessions");
}

export async function deleteSession(id) {
  await db.query("DELETE FROM sessions WHERE id = ?", [id]);
  revalidatePath("/admin/sessions");
  revalidatePath("/sessions");
}
