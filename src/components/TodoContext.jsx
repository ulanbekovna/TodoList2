import { useReducer } from "react";
import { createContext } from "react";

export const TodoContext = createContext();
const initialState = {
  todos: [],
};
function reducer(state, action) {
  switch (action.type) {
    case "TODO":
      const newTodos = {
        title: action.payload,
        id: Date.now(),
        completed: false,
      };
      return {
        todos: [...state.todos, newTodos],
      };
    case "DELETE":
      return {
        todos: state.todos.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
}

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state.todos);

  const addTodo = (inputValue) => {
    dispatch({ type: "TODO", payload: inputValue });
  };

  const contextValue = {
    addTodo,
    todos: state.todos,
    dispatch,
  };
  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};
