import axios from "axios";

export default class TodoService {
  constructor() {}

  BASE_URL = "https://senai-todo-list-api.herokuapp.com";

  getList() {
    return axios
      .get(`${this.BASE_URL}/todos`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  save(todo) {
    return axios
      .post(`${this.BASE_URL}/todos`, todo)
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .catch((error) => console.log(error));
  }

  updateTodo(todo) {
    return axios
      .patch(`${this.BASE_URL}/todos/${todo.id}`, todo)
      .then((response) => {
        return response.status;
      }).catch((error) => {
        return error;
      });
  }
}