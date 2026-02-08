import { useEffect, useState } from "react";
import type  { Todo } from "../types/todo";

type Props = {
import { useState } from "react";
import type { Todo } from "../types/todo";

interface Props {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, text: string) => void;
};

export default function TodoItem({ todo, onToggle, onDelete, onEdit }: Props) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(todo.text);

  useEffect(() => {
    setDraft(todo.text);
  }, [todo.text]);

  const save = () => {
    onEdit(todo.id, draft);
    setEditing(false);
  };

  const cancel = () => {
    setDraft(todo.text);
    setEditing(false);
  };

  return (
    <li style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 8 }}>
      <input type="checkbox" checked={todo.done} onChange={() => onToggle(todo.id)} />

      {editing ? (
        <input
          autoFocus
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onBlur={save}
          onKeyDown={(e) => {
            if (e.key === "Enter") save();
            if (e.key === "Escape") cancel();
          }}
          style={{ flex: 1 }}
        />
      ) : (
        <span
          onDoubleClick={() => setEditing(true)}
          style={{
            flex: 1,
            cursor: "pointer",
            textDecoration: todo.done ? "line-through" : "none",
          }}
          title="Double click để sửa"
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

      <button onClick={() => setEditing(true)} title="Sửa">✏️</button>
      <button onClick={() => onDelete(todo.id)} title="Xóa">❌</button>
      <button onClick={() => onDelete(todo.id)}>❌</button>
    </li>
  );
}
