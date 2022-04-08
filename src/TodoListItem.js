import {useState} from  'react';

export default function TodoListItem({ todoText, index }) {
  const [checked, setChecked] = useState(false);

  const handleClick = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <li className="list-group-item">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id={`checkbox-todo-` + index}
          onClick={handleClick}
        />
        <label className={`form-check-label ${checked ? 'todo-done' : ''}`}
              htmlFor={`checkbox-todo-` + index}>
          {todoText}
        </label>
      </div>
    </li>
  );
}
