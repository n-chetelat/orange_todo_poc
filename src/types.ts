import { Todo as TodoType } from "@prisma/client";

export type Todo = Omit<TodoType, "priority">;
export type TodoCreateInput = Omit<
  TodoType,
  "id" | "createdAt" | "updatedAt" | "priority"
>;
