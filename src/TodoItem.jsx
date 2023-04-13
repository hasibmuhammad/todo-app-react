import "remixicon/fonts/remixicon.css";

export default function TodoItem({ todos, toggleTodo, deleteTodo }) {
  return (
    <div className="todo-container">
      <h1>Your Todos</h1>
      <ul className="todos">
        {todos.length === 0 && "No Todo!"}
        {todos.map((td) => (
          <li className="todo" key={td.id}>
            <input
              type="checkbox"
              checked={td.state}
              onChange={(e) => toggleTodo(td.id, e.target.checked)}
            />
            <span>{td.title}</span>
            <button onClick={() => deleteTodo(td.id)} className="btn-delete">
              <i className="ri-delete-bin-7-line"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
