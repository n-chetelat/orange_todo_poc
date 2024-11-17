import { getTodos } from "@/queries/todos";
import TodoItem from "@/components/TodoItem";
import { createTodo } from "@/actions/todos";

const todos = await getTodos();

export default function Home() {
  return (
    <main className="p-4 flex flex-col gap-4 items-center">
      <h1 className="text-xl font-semibold">Orange ToDo</h1>
      <div className="max-w-lg w-full">
        <ul className="flex flex-col gap-4 p-4 border-orange-300 border-4 rounded-sm">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
      <button className="bg-orange-300 p-4 rounded-md hover:bg-orange-400">
        Add Todo
      </button>
    </main>
  );
}
