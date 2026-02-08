import type { Todo } from "../types/todo";


export function addTodo(todos: Todo[], text: string): Todo[] {
  if (!text.trim()) return todos;

  return [
    ...todos,
    {
      id: Date.now(),
      text,
      done: false,
    },
  ];
}