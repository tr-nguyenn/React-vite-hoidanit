import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import reactLogo from "./assets/react.svg";
import {useState} from "react";

const App = () => {
  const [todoList, setTodoList] = useState([
    {id: 1, name: "Learning React"},
    {id: 2, name: "Watching Youtube"},
  ]);

  const hoidanit = "Eric Argentina";
  const age = 25;
  const data = {
    address: "hanoi",
    country: "vietnam",
  };

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

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  //{key:value}
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew addNewToDo={addNewToDo} />
      <TodoData name={hoidanit} age={age} data={data} todoList={todoList} />
      <div className="todo-image">
        <img src={reactLogo} className="logo" />
      </div>
    </div>
  );
};

export default App;
