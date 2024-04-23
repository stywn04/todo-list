"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createTodo(formData: FormData) {
  const content = String(formData.get("content"));
  await prisma.todo.create({ data: { content } });

  revalidatePath("/");
}

export async function getAllTodos() {
  const todos = await prisma.todo.findMany({ orderBy: { createdAt: "desc" } });
  return todos;
}

export async function checklistTodo(id: string, isDone: boolean) {
  await prisma.todo.update({ where: { id }, data: { isDone: !isDone } });
  revalidatePath("/");
}

export async function deleteTodo(id: string) {
  await prisma.todo.delete({ where: { id } });
  revalidatePath("/");
}
