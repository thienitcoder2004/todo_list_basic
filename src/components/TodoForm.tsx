import { useState } from "react";

interface Props {
  onAdd: (text: string) => void;
}

export default function TodoForm({ onAdd }: Props) {
  const [text, setText] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAdd(text);
        setText("");
      }}
    >
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New todo"
      />
      <button>Add</button>
    </form>
  );
}
