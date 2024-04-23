import { getAllTodos } from "@/action/todo.action";
import { TodoForm } from "@/components/todo-form";
import { TodoCheckBox } from "@/components/todo-checkbox";
import { TodoDelete } from "@/components/todo-delete";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "To-Do List",
};

export default async function Home() {
  const todos = await getAllTodos();
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-md mx-auto py-20">
        <h1 className="font-bold text-2xl mb-4">To-Do List</h1>
        <TodoForm />

        <section className="flex flex-col gap-2 mt-4">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="py-2 px-4 rounded-md bg-transparent border border-zinc-900 flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <TodoCheckBox id={todo.id} isDone={todo.isDone} />
                <h1
                  className={`${
                    todo.isDone ? "line-through text-zinc-700" : ""
                  }`}
                >
                  {todo.content}
                </h1>
              </div>
              <TodoDelete id={todo.id} />
            </div>
          ))}
        </section>
        {todos.length < 1 ? (
          <i className="text-zinc-700">you don't have any tasks to-do.</i>
        ) : null}
      </div>
    </main>
  );
}
