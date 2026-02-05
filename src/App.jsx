import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { Todo } from "./components/Todo.jsx";
import { TodoFilters } from "./components/TodoFilters.jsx";
import { TodoForm } from "./components/TodoForm.jsx";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4">
      <div className="max-w-xl mx-auto rounded-2xl bg-slate-900/50 border border-slate-800 p-4 sm:p-6 space-y-4">
        <Header />
        <TodoFilters />
        <Todo />
        <TodoForm />
        <Footer />
      </div>
    </div>
  );
}

export default App;
