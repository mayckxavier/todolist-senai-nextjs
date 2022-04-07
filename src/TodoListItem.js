export default function TodoListItem({ todoText, index }) {
  return (
    <li className="list-group-item">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id={`checkbox-todo-` + index}
        />
        <label className="form-check-label" htmlFor={`checkbox-todo-` + index}>
          {todoText}
        </label>
      </div>
    </li>
  );
}
