import { Todo } from "@/types";

const todos: Todo[] = [
  {
    id: 1,
    content: "Wash orange",
    done: false,
  },
  {
    id: 2,
    content: "Peel orange",
    done: false,
  },
];

export function getTodos(): Todo[] {
  return todos;
}
