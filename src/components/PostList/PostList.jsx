import { Modal } from "../Modal/Modal";
import PostItem from "../PostItem/PostItem";
import "./PostList.css";

const PostList = ({ todoState, dispatchTodo }) => {
  const data = todoState.data;
  const modal = todoState.modal;

  const deleteItem = (id) => {
    const newData = data.filter((element) => {
      return element.id !== id;
    });
    dispatchTodo({ type: "delete", data: newData });
  };

  const changeToDoHandler = (data, id, value) => {
     const newArray = JSON.parse(JSON.stringify(data))
     console.log(id)
     newArray.find((element) => {
        return element.id===id
      }).name = value  
      dispatchTodo({ type: "delete", data: newArray })
      dispatchTodo({ type: "modal", modal:false })
  };

  const openModalHandler = (id) => {
    console.log(id)
    dispatchTodo({ type: "modal", modal: true });
  };

  return (
    
      <div className="postList">
        {data.map((post) => {
          return (
            <PostItem
              post={post}
              key={post.name}
              deleteItem={deleteItem}
              dispatchTodo={dispatchTodo}
              modal={modal}
              todoState={todoState}
              changeToDoHandler={changeToDoHandler}
              openModalHandler={openModalHandler}
            />
          );
        })}
      </div>
    
  );
};
export default PostList;
