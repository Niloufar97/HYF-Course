/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const SubComponent = ({todo, deleteTodo, addComment,checkTodo}) => {
    return (
      <li key={todo.id}>
        <input type="checkbox" checked={todo.checked} onChange={(e) => {checkTodo(todo.id, e.target.checked)}} />
        <span style={{textDecoration: todo.completed ? "line-through" : "none"}}>{todo.text}</span>
        <input type="text" value={todo.comment} onChange={(e) => {addComment(todo.id , e.target.value)}}/>
        <button onClick={() => {deleteTodo(todo.id)}}>Delete</button>
      </li>
    );
  }
  
  export default SubComponent;