"use client";

import { useRef } from "react";
import { useForm } from "react-hook-form";
import { Todo, TodoCreateInput } from "@/types";
import { updateTodo, deleteTodo, updateTodoDone } from "@/actions/todos";
import React from "react";

export default function TodoItem({ todo }: { todo: Todo }) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      content: todo.content,
      done: todo.done,
    },
  });

  const contentRef = useRef<HTMLInputElement | null>(null);
  const { ref, ...contentRegister } = register("content");

  const handleUpdateTodo = async (data: TodoCreateInput) => {
    try {
      await updateTodo(todo.id, {
        content: data.content,
        done: data.done,
      });
      contentRef.current?.blur();
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
    <li className="border-b border-orange-300 p-2 last:border-none">
      <form
        onSubmit={handleSubmit(handleUpdateTodo)}
        className="flex flex-row gap-2 justify-between"
      >
        <input
          {...register("done")}
          type="checkbox"
          onChange={async (e) => {
            await updateTodoDone(todo.id, e.target.checked);
          }}
        />
        <input
          {...contentRegister}
          ref={(element) => {
            ref(element);
            contentRef.current = element;
          }}
        />

        <button
          type="button"
          className="bg-orange-300 px-2 rounded-md hover:bg-orange-400"
          onClick={handleDeleteTodo}
        >
          Remove
        </button>
      </form>
    </li>
  );
}
