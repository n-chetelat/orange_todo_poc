"use client";

import { Todo } from "@/types";

export default function TodoItem({ todo }: { todo: Todo }) {
  return (
    <li className="flex flex-row gap-2 border-b border-orange-300 p-2  justify-between last:border-none">
      <div className="flex gap-2">
        <input type="checkbox"></input>
        <span>{todo.content}</span>
      </div>
      <div className="flex gap-2">
        <button className="bg-orange-300 px-2 rounded-md hover:bg-orange-400">
          Edit
        </button>
        <button className="bg-orange-300 px-2 rounded-md hover:bg-orange-400">
          Remove
        </button>
      </div>
    </li>
  );
}
