import "./App.css";

import { useState } from "react";
import List from "./components/List";


let initialTodos = [
  {id:1 , title: "do somethig" , done : true},
  {id: 2 , title : "do another ting" , done : false}
]



function App() {
  const [todos , setTodos] = useState(initialTodos)
 

  return (
    <List list={todos}  item={todo => <p>{todo.title}</p>}/>
 
  );
}

export default App;
