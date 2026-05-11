"use server";

import db from "@/lib/db";
import { revalidatePath } from "next/cache";
import { writeFile } from "fs/promises";
import path from "path";

async function saveFile(file) {
  if (!file || file.size === 0) return null;

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const filename = `popup-${Date.now()}-${file.name.replace(/\s+/g, "-")}`;
  const uploadDir = path.join(process.cwd(), "public", "uploads");
  const filePath = path.join(uploadDir, filename);

  await writeFile(filePath, buffer);
  return `/uploads/${filename}`;
}

export async function getPopupSettings() {
  const [rows] = await db.query("SELECT * FROM popups WHERE id = 1");
  return rows[0] || null;
}

export async function updatePopupSettings(formData) {
  const is_active = formData.get("is_active") === "on";
  const title = formData.get("title");
  const description = formData.get("description");
  const link_url = formData.get("link_url");
  const imageFile = formData.get("image");
  const currentImageUrl = formData.get("current_image_url");

  let image_url = currentImageUrl;
  if (imageFile && imageFile.size > 0) {
    image_url = await saveFile(imageFile);
  }

  await db.query(
    "UPDATE popups SET is_active = ?, title = ?, description = ?, image_url = ?, link_url = NULL WHERE id = 1",
    [is_active, title, description, image_url]
  );

  revalidatePath("/");
  revalidatePath("/admin/popup");
  return { success: true };
}
