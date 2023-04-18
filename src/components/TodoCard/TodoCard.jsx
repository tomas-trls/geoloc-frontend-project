import React from "react";
import deleteImage from "../../assets/images/delete.svg";
import "./TodoCard.scss";

const TodoCard = ({ id, task, completed, handleChecked, handleDelete }) => {
  return (
    <div className="todo-card">
      <label className="todo-card__switch">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => handleChecked(id)}
        />
        <span className="todo-card__slider todo-card__slider--round"></span>
      </label>
      <span
        className="todo-card__task"
        style={{
          textDecoration: completed ? "line-through" : "none",
        }}
      >
        {task}
      </span>
      <button className="todo-card__button" onClick={() => handleDelete(id)}>
        <img src={deleteImage} alt="trashcan delete icon" />
      </button>
    </div>
  );
};

export default TodoCard;
