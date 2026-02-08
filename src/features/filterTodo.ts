import type { Todo, FilterType } from "../types/todo";

export function filterTodo(
  todos: Todo[],
  filter: FilterType
): Todo[] {
  if (filter === "done") return todos.filter(t => t.done);
  if (filter === "todo") return todos.filter(t => !t.done);
  return todos;
}
