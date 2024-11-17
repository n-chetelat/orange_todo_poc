import { Todo } from "@/types";
import prisma from "@/libs/prisma";

export async function getTodos(): Promise<Todo[]> {
  const todos = await prisma.todo.findMany();
  return todos;
}
