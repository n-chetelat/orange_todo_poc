import { Todo as TodoType } from "@prisma/client";
export { type Todo } from "@prisma/client";

export type TodoCreateInput = Omit<
  TodoType,
  "id" | "createdAt" | "updatedAt" | "priority"
>;
