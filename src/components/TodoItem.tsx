"use client";

import { useState } from "react";
import { Todo } from "@/types";
import { updateTodo, deleteTodo } from "@/actions/todos";

export default function TodoItem({ todo }: { todo: Todo }) {
  const [content, setContent] = useState<string>(todo.content);
  const [checked, setChecked] = useState<boolean>(todo.done);

  const handleUpdateTodo = async () => {
    try {
      await updateTodo({
        id: todo.id,
        content,
        done: checked,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteTodo = async () => {
    try {
      await deleteTodo(todo.id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <li className="flex flex-row gap-2 border-b border-orange-300 p-2  justify-between last:border-none">
      <div className="flex gap-2">
        <input type="checkbox" onChange={(e) => setChecked(e.target.checked)} />
        <input value={content} onChange={(e) => setContent(e.target.value)} />
      </div>
      <div className="flex gap-2">
        <button
          className="bg-orange-300 px-2 rounded-md hover:bg-orange-400"
          onClick={handleUpdateTodo}
        >
          Save
        </button>
        <button
          className="bg-orange-300 px-2 rounded-md hover:bg-orange-400"
          onClick={handleDeleteTodo}
        >
          Remove
        </button>
      </div>
    </li>
  );
}
