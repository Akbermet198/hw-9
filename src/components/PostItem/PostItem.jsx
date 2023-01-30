import { useState } from "react";
import { Modal } from "../Modal/Modal";
import MyButton from "../UI/Input/Button/Button";
import "./PostItem.css";

const PostItem = ({
  post,
  deleteItem,
  dispatchTodo,
  modal,
  todoState,
  changeToDoHandler,
  openModalHandler
}) => {
  
const [modalState, setModalVisibility] = useState(false)

const openModal = ()=> {
  setModalVisibility(prevState => !prevState)
  dispatchTodo({ type: "edit", payload: todoState.editValue })
}


  return (
    <>
      {/* modal */ modalState ? (
        <Modal
          todoState={todoState}
          dispatchTodo={dispatchTodo}
          post={post}
          changeToDoHandler={changeToDoHandler}
        />
      ) : null}

      <div className="post">
        <strong>{post.name}</strong>
        <MyButton onClick={() => deleteItem(post.id)}>Delete</MyButton>
        <MyButton onClick={/* ()=> openModalHandler(post.id) */ openModal }>EDIT</MyButton>
      </div>
    </>
  );
};
export default PostItem;
