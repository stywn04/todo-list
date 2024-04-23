"use client";
import { deleteTodo } from "@/action/todo.action";
import { X } from "lucide-react";
import { useTransition } from "react";
import { SubmitLoading } from "./submit-loading";
export function TodoDelete({ id }: { id: string }) {
  const [isPending, setTransition] = useTransition();

  async function handler() {
    setTransition(async () => {
      await deleteTodo(id);
    });
  }
  return (
    <button onClick={handler}>{isPending ? <SubmitLoading /> : <X />}</button>
  );
}
