import PostList from "./components/PostList/PostList";
import { useReducer, useState } from "react";
import "./App.css";
import PostForm from "./components/PostForm/PostForm";

const data = [{ name: "Akbermet", id: "Akbermet" }];

const toDoReducer = (state, action) => {
  console.log("action", action);
  if (action.type === "value") {
    return {
      ...state,
      value: action.payload,
    };
  }
  if (action.type === "add") {
    return {
      ...state,
      value: action.payload,
      isValid: false,
      data: action.data,
    };
  }
  if (action.type === "delete") {
    return {
      ...state,
      data: action.data,
    };
  }
};

function App() {
  const [todoState, dispatchTodo] = useReducer(toDoReducer, {
    value: "",
    isValid: false,
    data: data,
  });

  const toDoChangeHandler = (event) => {
    dispatchTodo({ type: "value", payload: event.target.value, data: data });
  };

  const addTodoItem = (event) => {
    event.preventDefault();

    if (todoState.isValid === false) {
      const toDoItem = {
        id: todoState.value,
        name: todoState.value,
      };

      todoState.data.push(toDoItem);
    }

    dispatchTodo({ type: "add", payload: event.target.value, data: data });

    console.log("todoState", todoState);
  };

  return (
    <div className="App">
      <PostForm
        inputState={todoState}
        toDoChangeHandler={toDoChangeHandler}
        addTodoItem={addTodoItem}
      />
      <PostList data={todoState.data} dispatchTodo={dispatchTodo} />
    </div>
  );
}

export default App;
