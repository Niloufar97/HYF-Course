import SubComponent from "./SubComponent ";
import { useState } from "react";
const CallbackExercise = () => {
  // eslint-disable-next-line no-unused-vars
  const [todos, setTodos] = useState([
    { id: 1, text: "Buy groceries", comment: "", completed: false },
    { id: 2, text: "Do laundry", comment: "", completed: false },
    { id: 3, text: "Clean bathroom", comment: "", completed: false },
  ]);

  const changeTodoStatus = (todoId, checked) => {
    const newTodo = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, completed: checked };
      }
      return todo;
    });
    setTodos(newTodo);
  };

  const addComment = (todoId, comment) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        const newTodo = (todo = {
          ...todo,
          comment: comment,
        });
        return newTodo;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo = (todoId) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  };
  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <SubComponent
            todo={todo}
            key={todos.id}
            deleteTodo={deleteTodo}
            addComment={addComment}
            checkTodo={changeTodoStatus}
          />
        ))}
      </ul>
    </div>
  );
};

export default CallbackExercise;
