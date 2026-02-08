import type { Todo } from "../types/todo";

export function editTodo(todos: Todo[], id: number, newText: string): Todo[] {
  const text = newText.trim();
  if (!text) return todos; // không cho sửa thành rỗng

  return todos.map((t) => (t.id === id ? { ...t, text } : t));
}
