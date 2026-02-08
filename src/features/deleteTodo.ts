import { Todo } from "../types/todo";

export function deleteTodo(todos: Todo[], id: number): Todo[] {
  return todos.filter(todo => todo.id !== id);
}
