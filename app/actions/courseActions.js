"use server";

import db from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createCourse(formData) {
  const course_name = formData.get("course_name");
  const duration = formData.get("duration");
  const level = formData.get("level");
  const description = formData.get("description");

  await db.query(
    "INSERT INTO courses (course_name, duration, level, description) VALUES (?, ?, ?, ?)",
    [course_name, duration, level, description]
  );

  revalidatePath("/admin/courses");
  revalidatePath("/admin");
  revalidatePath("/courses");
  revalidatePath("/");
  redirect("/admin/courses");
}

export async function updateCourse(id, formData) {
  const course_name = formData.get("course_name");
  const duration = formData.get("duration");
  const level = formData.get("level");
  const description = formData.get("description");

  await db.query(
    "UPDATE courses SET course_name=?, duration=?, level=?, description=? WHERE id=?",
    [course_name, duration, level, description, id]
  );

  revalidatePath("/admin/courses");
  revalidatePath("/admin");
  revalidatePath("/courses");
  revalidatePath("/");
  redirect("/admin/courses");
}

export async function deleteCourse(id) {
  await db.query("DELETE FROM courses WHERE id=?", [id]);
  revalidatePath("/admin/courses");
  revalidatePath("/admin");
  revalidatePath("/courses");
  revalidatePath("/");
}
