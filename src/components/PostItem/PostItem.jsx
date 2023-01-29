import MyButton from '../UI/Input/Button/Button'
import './PostItem.css'

const PostItem = ({post,deleteItem })=>{
 

 return (
  <div className='post'>
<strong  >
 {post.name}
</strong>
<MyButton onClick = {()=>  deleteItem(post.id) }>Delete</MyButton>
<MyButton onClick>EDIT</MyButton>
  </div>
 )
}
export default PostItem