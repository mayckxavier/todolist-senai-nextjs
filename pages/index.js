import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";

import TodoList from "../src/TodoList";
import TodoService from "../src/services/TodoService";

export default function Home() {
  const [todoValue, setTodoValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const todoService = new TodoService();

  useEffect(() => {
    loadList();
  },[]);

  const loadList = () => {
    const todoListItem = todoService.getList();
    todoListItem.then((data) =>{
      console.log(data);
      if (data.length > 0) {
        setTodoList(data);
      }
    })
  };

  const handleButtonClick = () => {
    if (todoValue !== "") {
      const todo = {
        title: todoValue,
        checked: false,
      };

      const savedTodo = todoService.save(todo);
      savedTodo.then(() => {
        loadList();
      })
      setTodoValue("");
    }
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
