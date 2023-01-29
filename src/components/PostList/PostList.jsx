import PostItem from "../PostItem/PostItem";
import "./PostList.css";

const PostList = ({ data, dispatchTodo }) => {
  const deleteItem = (id) => {
    const newData = data.filter((element) => {
      return element.id !== id;
    });
    dispatchTodo({ type: "delete", data: newData });
  };

  return (
    <div className="postList">
      {data.map((post) => {
        return <PostItem post={post} key={post.name} deleteItem={deleteItem} />;
      })}
    </div>
  );
};
export default PostList;
