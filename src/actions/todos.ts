"use server";

import prisma from "@/libs/prisma";
import { Todo } from "@/types";
import { revalidatePath } from "next/cache";

export async function createTodo(data: Omit<Todo, "id">): Promise<Todo> {
  const newTodo = await prisma.todo.create({
    data,
  });
  revalidatePath("/");
  return newTodo;
}

export async function updateTodo(data: Todo): Promise<Todo> {
  const todo = await prisma.todo.update({
    where: { id: data.id },
    data,
  });
  revalidatePath("/");
  return todo;
}

export async function deleteTodo(id: string): Promise<boolean> {
  const todo = await prisma.todo.delete({
    where: { id },
  });
  revalidatePath("/");
  return !!todo;
}
