import styled from "styled-components"
import MyInput from "../UI/Input/MyInput"
import MyButton from "../UI/Input/Button/Button"
export const Modal = ({todoState,  dispatchTodo,changeToDoHandler, post})=>{

 const changeHandler = (event) => {
  dispatchTodo({ type: "edit", payload: event.target.value });
};


 return (
  <StyledModal>
   <MyInput label= {"set new todo"} value = {todoState.editValue} onChange= {changeHandler}></MyInput>
   <MyButton onClick={()=> changeToDoHandler(todoState.data, post.id, todoState.editValue)}> Edit </MyButton>
  </StyledModal>
 )
}
const StyledModal = styled.div`
 width: 700px;
height: 200px;
margin: 0 auto;
background-color: #6f7d6e;
position: fixed;
transform: translate(-50%, -50%);
top: 50vh;
left: 50vw;
padding: 30px 50px;
`