import { useState } from "react";
import type { Todo } from "../types/todo";

interface Props {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, text: string) => void;
}

export default function TodoItem({ todo, onToggle, onDelete, onEdit }: Props) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
      />

      {editing ? (
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={() => {
            onEdit(todo.id, text);
            setEditing(false);
          }}
        />
      ) : (
        <span
          style={{
            textDecoration: todo.done ? "line-through" : "none",
            cursor: "pointer",
          }}
          onDoubleClick={() => setEditing(true)}
        >
          {todo.text}
        </span>
      )}

      <button onClick={() => onDelete(todo.id)}>❌</button>
    </li>
  );
}
