import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import TodoList from "../src/TodoList";

export default function Home() {
  const [todoValue, setTodoValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleButtonClick = () => {
    setTodoList([...todoList, todoValue]);
    setTodoValue('');
  };

  return (
    <div className="container">
      <div className="mb-3">
        <label htmlFor="input-tarefa" className="form-label"></label>
        <input
          type="text"
          className="form-control"
          id="input-tarefa"
          placeholder="Digite sua tarefa"
          onChange={(e) => setTodoValue(e.target.value)}
          value={todoValue}
        />
        <button
          type="submit"
          className="btn btn-primary mt-3"
          onClick={handleButtonClick}
        >
          Adicionar Tarefa
        </button>
      </div>

      <TodoList list={todoList} />
    </div>
  );
}