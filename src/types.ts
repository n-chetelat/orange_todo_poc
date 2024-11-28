import { Todo } from "@prisma/client";
export { type Todo } from "@prisma/client";

export type TodoCreateInput = Omit<Todo, "id" | "createdAt" | "updatedAt">;
