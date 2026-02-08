import type { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

type Props = {
interface Props {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, text: string) => void;
};

export default function TodoList({ todos, onToggle, onDelete, onEdit }: Props) {
  if (todos.length === 0) return <p>Chưa có công việc nào.</p>;

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((t) => (
        <TodoItem key={t.id} todo={t} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />
}

export default function TodoList(props: Props) {
  return (
    <ul>
      {props.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} {...props} />
      ))}
    </ul>
  );
}
