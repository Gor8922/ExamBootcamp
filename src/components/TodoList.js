import { useState } from "react";
import React from "react";

export default function TodoList({
  handleEdit,
  handleDelete,
  completeTodo,
  title,
  id,
  isDone,
}) {
  const [isEdited, setIsEdited] = useState(false);
  const [editTodo, seteditTodo] = useState(title);

  const completeEdid = (e) => {
    e.stopPropagation();
    handleEdit(id, editTodo);
    resetEdit(e);
  };

  const resetEdit = (e) => {
    e.stopPropagation();
    setIsEdited(!isEdited);
    seteditTodo(title);
  };

  const handleEditClick = (e) => {
    e.stopPropagation();
    setIsEdited(!isEdited);
  };
  return (
    <div className="todolist">
      {isEdited ? (
        <div>
          <input
            onChange={(e) => seteditTodo(e.target.value)}
            value={editTodo}
            type="text"
          />
          <button onClick={(e) => completeEdid(e)}>V</button>
          <button onClick={(e) => resetEdit(e)}>X</button>
        </div>
      ) : (
        <div
          onClick={(e) => completeTodo(id)}
          className={`todo ${isDone ? "done" : ""}`}
        >
          {title}
          <button className="edordel" onClick={(e) => handleEditClick(e)}>
            E
          </button>

          <button onClick={() => handleDelete(id)} className="edordel">
            D
          </button>
        </div>
      )}
    </div>
  );
}
