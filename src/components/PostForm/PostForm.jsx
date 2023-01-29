
import MyButton from "../UI/Input/Button/Button";
import MyInput from "../UI/Input/MyInput";
import "./PostForm.css";

const PostForm = ({ inputState, toDoChangeHandler, addTodoItem}) => {
 
 

  return (
   <div className="formDiv">
<form>
      <MyInput
        onChange={toDoChangeHandler}
        value={inputState.value}
        type="text"
        placeholder="name"
        label={"Username"}
    
      />
     
      <MyButton onClick={addTodoItem} type="submit"  /* disabled={!todoState.value} */ >
        Add User
      </MyButton>
    </form>
   </div>
    
  );
};
export default PostForm;
