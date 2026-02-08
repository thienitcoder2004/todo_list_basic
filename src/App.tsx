import { useEffect, useState } from "react";

import { addTodo } from "./features/addTodo";
import { toggleTodo } from "./features/toggleTodo";
import { deleteTodo } from "./features/deleteTodo";
import { editTodo } from "./features/editTodo";
import { filterTodo } from "./features/filterTodo";
import { loadTodos, saveTodos } from "./features/persistTodo";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
import type { FilterType, Todo } from "./types/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterType>("all");

  useEffect(() => {
    setTodos(loadTodos());
  }, []);

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  return (
    <div style={{ width: 400, margin: "40px auto" }}>
      <h2>Todo List (React + TypeScript)</h2>

      <TodoForm onAdd={(text) => setTodos(addTodo(todos, text))} />
      <Filter setFilter={setFilter} />

      <TodoList
        todos={filterTodo(todos, filter)}
        onToggle={(id) => setTodos(toggleTodo(todos, id))}
        onDelete={(id) => setTodos(deleteTodo(todos, id))}
        onEdit={(id, text) => setTodos(editTodo(todos, id, text))}
      />
    </div>
  );
}

export default App;
