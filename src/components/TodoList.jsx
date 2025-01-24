import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue.trim(), completed: false }]);
      setInputValue("");
    }
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <Div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Todo List</h1>
      <form>
        <GlobalInput
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Введите задачу"
          style={{ marginRight: "10px" }}
        />
        <Button onClick={addTodo}>Добавить</Button>
      </form>
      <Ul style={{ listStyleType: "none", padding: 0 }}>
        {todos.map((todo, index) => (
          <Li key={index} style={{ margin: "10px 0" }}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                marginRight: "10px",
              }}
            >
              {todo.text}
            </span>
            <input type="checkbox" onClick={() => toggleTodo(index)} />
            <DeleteButton
              onClick={() => removeTodo(index)}
              style={{ marginLeft: "10px" }}
            >
              Удалить
            </DeleteButton>
          </Li>
        ))}
      </Ul>
    </Div>
  );
};

export default TodoList;
const Div = styled.div`
  text-align: center;
`;
const GlobalInput = styled.input`
  width: 300px;
  height: 60px;
  border-radius: 10px;
  background-color: #19d67b;
  color: black;
  border: 2px solid white;
  font-size: 20px;
  &:hover {
    box-shadow: 0px 0px 10px 3px black;
  }
`;

const DeleteButton = styled.button`
  width: 70px;

  height: 40px;
  background-color: darkmagenta;
  color: white;
  border-radius: 7px;
`;

const Button = styled.button`
  width: 80px;
  height: 40px;
  background-color: #38f298;
  color: white;
  border: 2px solid white;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 10px 3px black;
  }
`;

const Li = styled.h1`
  text-align: center;
  width: 50%;
  height: 70px;
  border: 2px solid black;
  font-size: 40px;
  border-radius: 10px;
  &:hover {
    box-shadow: 0px 0px 10px 3px black;
  }
`;
const Ul = styled.h1`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;
