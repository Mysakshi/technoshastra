"use server";

import db from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createJob(formData) {
  const title = formData.get("title");
  const company = formData.get("company");
  const location = formData.get("location");
  const job_type = formData.get("job_type");
  const skills = formData.get("skills");
  const description = formData.get("description");
  const link = formData.get("link");

  await db.query(
    "INSERT INTO jobs (title, company, location, job_type, skills, description, link) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [title, company, location, job_type, skills, description, link]
  );

  revalidatePath("/admin/jobs");
  revalidatePath("/jobs");
  revalidatePath("/");
  redirect("/admin/jobs");
}

export async function updateJob(id, formData) {
  const title = formData.get("title");
  const company = formData.get("company");
  const location = formData.get("location");
  const job_type = formData.get("job_type");
  const skills = formData.get("skills");
  const description = formData.get("description");
  const link = formData.get("link");

  await db.query(
    "UPDATE jobs SET title=?, company=?, location=?, job_type=?, skills=?, description=?, link=? WHERE id=?",
    [title, company, location, job_type, skills, description, link, id]
  );

  revalidatePath("/admin/jobs");
  revalidatePath("/jobs");
  revalidatePath("/");
  redirect("/admin/jobs");
}

export async function deleteJob(id) {
  await db.query("DELETE FROM jobs WHERE id=?", [id]);
  revalidatePath("/admin/jobs");
  revalidatePath("/jobs");
  revalidatePath("/");
}
