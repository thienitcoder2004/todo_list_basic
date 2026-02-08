
import type { Todo } from "../types/todo";

export function toggleTodo(todos: Todo[], id: number): Todo[] {
  return todos.map(todo =>
    todo.id === id ? { ...todo, done: !todo.done } : todo
  );
}
