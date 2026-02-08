import type { Todo } from "../types/todo";

const KEY = "todos";

export function loadTodos(): Todo[] {
  const data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
}

export function saveTodos(todos: Todo[]): void {
  localStorage.setItem(KEY, JSON.stringify(todos));
}
