"use client";

import { checklistTodo } from "@/action/todo.action";

interface TodoCheckBoxProps {
  id: string;
  isDone: boolean;
}
export function TodoCheckBox({ id, isDone }: TodoCheckBoxProps) {
  async function handler() {
    await checklistTodo(id, isDone);
  }
  return (
    <input
      type="checkbox"
      checked={isDone}
      onChange={handler}
      className="cursor-pointer"
    />
  );
}
