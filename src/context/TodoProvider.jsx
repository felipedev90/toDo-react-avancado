import { useState, useMemo, useCallback } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState.js";
import { TodoContext } from "./TodoContext";

export function TodoProvider({ children }) {
  const [todos, setTodos] = useLocalStorageState("todos", []);
  const [filter, setFilter] = useState("all");

  const visibleTodos = useMemo(() => {
    if (filter === "done") {
      return todos.filter((task) => task.done === true);
    }
    if (filter === "pending") {
      return todos.filter((task) => task.done === false);
    }

    return todos;
  }, [todos, filter]);

  const addTodo = useCallback(
    (text) => {
      const id = Date.now();
      const trimmedText = text.trim();
      if (trimmedText === "") return;

      const newTodo = {
        id: id,
        text: trimmedText,
        done: false,
      };

      setTodos((prev) => [...prev, newTodo]);
    },
    [setTodos],
  );

  const removeTodo = useCallback(
    (id) => {
      setTodos((prev) => prev.filter((task) => task.id !== id));
    },
    [setTodos],
  );

  const toggleTodo = useCallback(
    (id) => {
      setTodos((prev) =>
        prev.map((task) =>
          task.id === id ? { ...task, done: !task.done } : task,
        ),
      );
    },
    [setTodos],
  );

  const value = useMemo(
    () => ({
      todos,
      filter,
      setFilter,
      visibleTodos,
      addTodo,
      removeTodo,
      toggleTodo,
    }),
    [todos, filter, setFilter, visibleTodos, addTodo, removeTodo, toggleTodo],
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}
