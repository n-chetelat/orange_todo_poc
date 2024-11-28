"use client";

import { useRef } from "react";
import { createTodo } from "@/actions/todos";

export default function TodoForm() {
  const contentRef = useRef<HTMLInputElement | null>(null);
  const handleAddTodo = async (formData: FormData) => {
    const content = formData.get("content") || "";
    if (content === "") return;
    await createTodo({
      content: content as string,
      done: false,
    });
    contentRef.current?.blur();
  };

  return (
    <form action={handleAddTodo} className="flex flex-row gap-2 justify-center">
      <input
        type="text"
        name="content"
        ref={contentRef}
        className="flex-1 bg-orange-100 p-2"
        placeholder="Add orange to-do..."
      />
      <button className="bg-orange-300 p-4 rounded-md hover:bg-orange-400">
        Add Todo
      </button>
    </form>
  );
}
