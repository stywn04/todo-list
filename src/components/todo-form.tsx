"use client";
import { createTodo } from "@/action/todo.action";
import { useRef } from "react";
import { useFormStatus } from "react-dom";
import { SubmitLoading } from "./submit-loading";

export function TodoForm() {
  const formRef = useRef<HTMLFormElement | null>(null);

  return (
    <form
      ref={formRef}
      action={async (formData) => {
        await createTodo(formData);
        formRef.current?.reset();
      }}
      className="flex items-center justify-between gap-2"
    >
      <input
        type="text"
        name="content"
        placeholder="add your task"
        required
        className="w-full py-2 px-4 rounded-md bg-zinc-900/50 border border-zinc-700 outline-none"
      />
      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} className="py-2 px-4 rounded-md bg-zinc-900">
      {pending ? <SubmitLoading /> : "Add"}
    </button>
  );
}
