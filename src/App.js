import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    setTodos([
      ...todos,
      {
        title: inputValue,
        id: Math.random(),
        isDone: false,
      },
    ]);
    setInputValue("");
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id, newTitle) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.title = newTitle;
        }
        return todo;
      })
    );
  };

  const completeTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      })
    );
  };
  return (
    <div className="App">
      <div className="wrapper">
        <input
          value={inputValue}
          onChange={(e) => handleInput(e)}
          type="text"
        />
        <button disabled={!inputValue} onClick={handleClick}>
          Add
        </button>
        {todos.map((item) => {
          return (
            <TodoList
              completeTodo={completeTodo}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              key={item.id}
              {...item}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
