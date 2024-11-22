"use client";

import { createTodo } from "@/actions/todos";

export default function TodoForm() {
  const handleAddTodo = async (formData: FormData) => {
    const content = formData.get("content") || "";
    if (content === "") return;
    await createTodo({
      content: content as string,
      done: false,
    });
  };

  return (
    <form action={handleAddTodo}>
      <input type="text" name="content" />
      <button className="bg-orange-300 p-4 rounded-md hover:bg-orange-400">
        Add Todo
      </button>
    </form>
  );
}
