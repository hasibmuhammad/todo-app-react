import { useState } from "react";

export default function Form({ addTodo }) {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(todo);

    setTodo("");
  };
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          className="text-input"
          name="todo"
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter text..."
        />
        <button className="btn-submit" type="submit">
          Add To Do
        </button>
      </form>
    </div>
  );
}
