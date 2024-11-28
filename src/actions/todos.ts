"use server";

import prisma from "@/libs/prisma";
import { Todo, TodoCreateInput } from "@/types";
import { revalidatePath } from "next/cache";

export async function createTodo(data: TodoCreateInput): Promise<Todo> {
  const newTodo = await prisma.todo.create({
    data,
  });
  revalidatePath("/");
  return newTodo;
}

export async function updateTodo(
  id: string,
  data: TodoCreateInput
): Promise<Todo> {
  const todo = await prisma.todo.update({
    where: { id },
    data,
  });
  revalidatePath("/");
  return todo;
}

export async function updateTodoDone(id: string, done: boolean): Promise<Todo> {
  const todo = await prisma.todo.update({
    where: { id },
    data: {
      done,
    },
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
