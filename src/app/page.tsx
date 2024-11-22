import { getTodos } from "@/queries/todos";
import TodoItem from "@/components/TodoItem";
import TodoForm from "@/components/TodoForm";

export default async function Home() {
  const todos = await getTodos();
  return (
    <main className="p-4 flex flex-col gap-4 items-center">
      <h1 className="text-xl font-semibold">Orange To-Do</h1>
      <div className="max-w-lg w-full">
        <ul className="flex flex-col gap-4 p-4 border-orange-300 border-4 rounded-sm">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
      <TodoForm />
    </main>
  );
}
