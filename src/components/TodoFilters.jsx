import { useTodo } from "../context/useTodos";

export function TodoFilters() {
  const { filter, setFilter } = useTodo();
  const btnClass = (active) =>
    `px-3 py-1.5 rounded-full border text-sm transition ${active ? "bg-slate-100 text-slate-900 border-slate-100" : "bg-transparent text-slate-200 border-slate-700 hover:bg-slate-800"}`;

  return (
    <div className="flex gap-2 flex-wrap">
      <button
        className={btnClass(filter === "all")}
        onClick={() => setFilter("all")}
        style={{ fontWeight: filter === "all" ? "700" : "400" }}
      >
        Todas
      </button>
      <button
        className={btnClass(filter === "done")}
        onClick={() => setFilter("done")}
        style={{ fontWeight: filter === "done" ? "700" : "400" }}
      >
        Concluídas
      </button>
      <button
        className={btnClass(filter === "pending")}
        onClick={() => setFilter("pending")}
        style={{ fontWeight: filter === "pending" ? "700" : "400" }}
      >
        Pendente
      </button>
    </div>
  );
}
