import React, { useState } from "react";
import { Header } from "./components/Header";
import { Zapros } from "./components/Zapros";
import TodoList from "./components/TodoList";

export const App = () => {
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState(!state);
  };
  return (
    <div>
      <Header handleClick={handleClick} state={state} />

      {state ? <Zapros /> : <TodoList />}
    </div>
  );
};
