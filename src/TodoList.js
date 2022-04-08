import TodoListItem from "./TodoListItem";

export default function TodoList({ list }) {
  return list.length == 0 ? (
    <p className="badge bg-info">
    Você ainda não tem tarefas</p>
  ) : (
    <ul className="list-group">
      {list.map((todo, index) => {
        return <TodoListItem
                    todoText={todo}
                    index={index}
                    key={index} />;
      })}
    </ul>
  );
}
