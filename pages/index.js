import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";

import TodoList from "../src/TodoList";
import TodoService from "../src/services/TodoService";

export default function Home() {
  const [todoValue, setTodoValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
      const todoService = new TodoService();
      const todoListItem = todoService.getList();
      todoListItem.then((data) =>{
        console.log(data);
        if (data.length > 0) {
          setTodoList(data);
        }
      })
  },[]);

  useEffect(() => {
    if (todoList !== null && todoList.length > 0) {
      // const todoService = new TodoService(window);
      // todoService.save(todoList);
    }
  }, [todoList]);

  const handleButtonClick = () => {
    if (todoValue !== "") {
      const todo = {
        id: todoList.length + 1,
        title: todoValue,
        checked: false,
      };

      todoList.push(todo);

      setTodoList([...todoList]);
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
