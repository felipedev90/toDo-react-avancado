export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-6 border-t border-slate-800 pt-4">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-400">
          © {year}{" "}
          <span className="text-slate-200">Criado por Felipe Augusto</span>
        </p>

        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/40 px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Persistência: localStorage
          </span>
        </div>
      </div>
    </footer>
  );
}
