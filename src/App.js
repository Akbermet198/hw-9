import PostList from "./components/PostList/PostList";
import { useReducer, useState } from "react";
import "./App.css";
import PostForm from "./components/PostForm/PostForm";

const data = [{ name: "Akbermet", id: "Akbermet" }];

const toDoReducer = (state, action) => {
 
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
  if (action.type === "modal") {
    return {
      ...state,
      modal: action.modal,
    };
  }
  if (action.type === "edit") {
    return {
      ...state,
      editValue: action.payload,
    };
  }
};

function App() {
  const [todoState, dispatchTodo] = useReducer(toDoReducer, {
    value: "",
    editValue: "",
    isValid: false,
    data: data,
    modal: false,
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

    
  };

  return (
    <div className="App">
      <PostForm
        inputState={todoState}
        toDoChangeHandler={toDoChangeHandler}
        addTodoItem={addTodoItem}
      />
      <PostList todoState={todoState} dispatchTodo={dispatchTodo} />
    </div>
  );
}

export default App;
