"use server";

import prisma from "@/libs/prisma";
import { Todo } from "@/types";

export async function createTodo(data: Omit<Todo, "id">): Promise<Todo> {
  const newTodo = await prisma.todo.create({
    data,
  });

  return newTodo;
}

export async function updateTodo(data: Todo): Promise<Todo> {
  const todo = await prisma.todo.update({
    where: { id: data.id },
    data,
  });

  return todo;
}

export async function deleteTodo(id: string): Promise<boolean> {
  const todo = await prisma.todo.delete({
    where: { id },
  });

  return !!todo;
}
