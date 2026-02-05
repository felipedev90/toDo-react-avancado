import { memo } from "react";
import { useTodo } from "../context/useTodos";

export const Todo = memo(function Todo() {
  const { visibleTodos, toggleTodo, removeTodo } = useTodo();

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950/40">
      <ul className="divide-y divide-slate-800">
        {visibleTodos.map((task) => (
          <li key={task.id} className="flex items-center gap-3 p-3">
            <input
              className="h-4 w-4 accent-slate-200"
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTodo(task.id)}
            />{" "}
            <span
              className="flex-1 text-sm"
              style={{ textDecoration: task.done ? "line-through" : "none" }}
            >
              {task.text}
            </span>
            <button onClick={() => removeTodo(task.id)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
});
