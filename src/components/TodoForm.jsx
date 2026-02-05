import { useState } from "react";
import { useTodo } from "../context/useTodos";

export function TodoForm() {
  const { addTodo } = useTodo();
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    addTodo(text);
    setText("");
  }

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-3">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={text}
          onChange={handleChange}
          className="flex-1 rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-400"
        />
        <button
          type="submit"
          className="rounded-lg px-3 py-2 text-sm font-medium bg-slate-100 text-slate-900 hover:bg-white transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Adicionar
        </button>
      </form>
    </div>
  );
}
