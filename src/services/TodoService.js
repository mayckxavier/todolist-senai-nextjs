import axios from "axios";

export default class TodoService {
  constructor(window) {
  }

  getList() {
    return axios
      .get("https://0a11-160-238-27-77.sa.ngrok.io/todos")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  save(list) {
    return this._storage.setItem(this.STORAGE_ITEM, JSON.stringify(list));
  }

  updateTodo(todo) {
    const todoList = JSON.parse(this._storage.getItem(this.STORAGE_ITEM));

    const updatedTodoList = todoList.map((item) => {
      if (item.id == todo.id) {
        return todo;
      }
      return item;
    });

    this.save(updatedTodoList);
  }
}
