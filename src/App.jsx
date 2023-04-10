import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

export default function App() {
  return (
    <>
      <div className="container">
        <div className="form">
          <form>
            <input
              className="text-input"
              type="text"
              placeholder="Enter text..."
            />
            <button className="btn-submit" type="submit">
              Add To Do
            </button>
          </form>
        </div>

        <div className="todo-container">
          <h1>Your Todos</h1>
          <ul className="todos">
            <li className="todo">
              <input type="checkbox" name="" id="" />
              <span>Todo 1</span>
              <button className="btn-delete">Delete</button>
            </li>
            <li className="todo">
              <input type="checkbox" name="" id="" />
              <span>Todo 2</span>
              <button className="btn-delete">Delete</button>
            </li>
            <li className="todo">
              <input type="checkbox" name="" id="" />
              <span>Todo 3</span>
              <button className="btn-delete">Delete</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
