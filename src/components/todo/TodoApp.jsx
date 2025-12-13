import "./todo.css";
import TodoData from "./TodoData";
import TodoNew from "./TodoNew";
import reactLogo from "../../assets/react.svg";
import {useState} from "react";

const TodoApp = () => {
  const [todoList, setTodoList] = useState([
    // {id: 1, name: "Learning React"},
    // {id: 2, name: "Watching Youtube"},
  ]);

  const addNewToDo = (name) => {
    const newTodo = {
      id: getRandomInt(1, 1000000),
      name: name,
    };

    setTodoList([...todoList, newTodo]);
    // todoList.push(newTodo);
    // setTodoList(todoList);
    //array.push //sử dụng trong hệ thống lớn có thể gây bug
  };

  const deleteTodo = (id) => {
    const newTodo = todoList.filter((item) => item.id !== id);
    setTodoList(newTodo);
  };

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew addNewToDo={addNewToDo} />

      {todoList.length > 0 ? (
        <TodoData todoList={todoList} deleteTodo={deleteTodo} />
      ) : (
        <div className="todo-image">
          <img src={reactLogo} className="logo" />
        </div>
      )}

      {/* {todoList.length > 0 && <TodoData todoList={todoList} />}
      {todoList.length === 0 && (
        <div className="todo-image">
          <img src={reactLogo} className="logo" />
        </div>
      )} */}
    </div>
  );
};

export default TodoApp;
