import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Form from "./Form";
import TodoItem from "./TodoItem";
import Footer from "./Footer";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const fromLocalStorage = localStorage.getItem("TODOS");
    if (fromLocalStorage == null) return [];

    return JSON.parse(fromLocalStorage);
  });

  useEffect(() => {
    localStorage.setItem("TODOS", JSON.stringify(todos));
  }, [todos]);

  // Adding Todo to existing todos object
  const addTodo = (title) => {
    if (title == "") return;
    setTodos((currentSate) => {
      return [...currentSate, { id: crypto.randomUUID(), title, state: false }];
    });
  };

  // Check uncheck the todo
  const toggleTodo = (id, state) => {
    setTodos((currentTodos) => {
      return currentTodos.map((cTodo) => {
        if (cTodo.id === id) {
          return { ...cTodo, state };
        }
        return cTodo;
      });
    });
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <>
      <div className="container">
        <Form addTodo={addTodo} />
        <TodoItem
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
        <Footer />
      </div>
    </>
  );
}
