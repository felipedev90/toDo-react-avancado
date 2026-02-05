import { useContext } from "react";
import { TodoContext } from "./TodoContext.js";

export function useTodo() {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }

  return context;
}
