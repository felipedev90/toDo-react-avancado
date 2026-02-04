import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  function handleAddTodo(text) {
    const id = Date.now();
    const trimmedText = text.trim();
    if (trimmedText === "") return;

    const newTodo = {
      id: id,
      text: trimmedText,
      done: false,
    };

    setTodos((prev) => [...prev, newTodo]);
  }

  function handleRemoveTodo(id) {
    setTodos((prev) => prev.filter((task) => task.id !== id));
  }

  function handleToggleTodo(id) {
    setTodos((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    );
  }

  return (
    <div>
      <Header />
      <Todo
        todos={todos}
        toggleTodo={handleToggleTodo}
        removeTodo={handleRemoveTodo}
      />
      <TodoForm addTodo={handleAddTodo} />
    </div>
  );
}

export default App;

function Header() {
  return (
    <header>
      <h1>ToDo List ✅</h1>
    </header>
  );
}

function Todo({ todos, toggleTodo, removeTodo }) {
  return (
    <div>
      <ul>
        {todos.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTodo(task.id)}
            />
            <span>{task.text}</span>

            <button onClick={() => removeTodo(task.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TodoForm({ addTodo }) {
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
    <div>
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={handleChange} />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}
