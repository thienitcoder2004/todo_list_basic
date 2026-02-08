import type { FilterType } from "../types/todo";

interface Props {
  setFilter: (filter: FilterType) => void;
}

export default function Filter({ setFilter }: Props) {
  return (
    <div>
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("todo")}>Todo</button>
      <button onClick={() => setFilter("done")}>Done</button>
    </div>
  );
}
