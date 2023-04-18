import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import TodoCard from "../../components/TodoCard/TodoCard";
import "./Todo.scss";

const Todo = () => {
  const [cardArr, setCardArr] = useState([]);
  const [newCard, setNewCard] = useState("");
  const unique_id = uuid();

  const handleText = (e) => {
    setNewCard(e.target.value);
  };

  const handleNewCard = (e) => {
    e.preventDefault();
    if (!newCard) return;
    setCardArr([...cardArr, { id: unique_id, task: newCard, completed: false }]);
    setNewCard("");
  };

  const handleChecked = (id) => {
    const updatedCard = cardArr.map((card) => {
      if (card.id === id) {
        return { ...card, completed: !card.completed };
      }
      return card;
    });
    setCardArr(updatedCard);
  };

  const handleDelete = (id) => {
    const updatedCard = cardArr.filter((card) => card.id !== id);
    setCardArr(updatedCard);
  };

  const todoCardJSX = cardArr.map((card) => {
    return (
      <TodoCard
        key={card.id}
        id={card.id}
        task={card.task}
        completed={card.completed}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
      />
    );
  });

  return (
    <div className="todo">
      <h3 className="todo__title">Goals of the Day</h3>
      <form className="todo__inputfield" onSubmit={handleNewCard}>
        <button src="" alt="add button" type="submit" className="todo__button">
          +
        </button>
        <input
          type="text"
          placeholder="Add your task here..."
          className="todo__input"
          onChange={handleText}
          value={newCard}
        />
      </form>
      <div className="todo__cards-container">{todoCardJSX}</div>
    </div>
  );
};

export default Todo;
