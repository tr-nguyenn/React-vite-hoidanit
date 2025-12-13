import {useState} from "react";

const TodoNew = (props) => {
  //useState hook (getter/setter)
  //const valueInput = "eric";

  const [valueInput, setValueInput] = useState("eric");

  const {addNewToDo} = props;

  //addNewToDo("eric"); //fire
  const handleClick = () => {
    console.log(">>>check value input: ", valueInput);
  };

  const handleOnChange = (name) => {
    setValueInput(name);
  };

  return (
    <div className="todo-new">
      <input
        type="text"
        className="inputTodo"
        placeholder="Enter your task"
        onChange={(event) => handleOnChange(event.target.value)}
      />
      <button className="btnAdd" onClick={handleClick}>
        Add
      </button>
      <div>My text input is: {valueInput}</div>
    </div>
  );
};

export default TodoNew;
