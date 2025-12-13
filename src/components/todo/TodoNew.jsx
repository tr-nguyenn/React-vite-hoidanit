const TodoNew = (props) => {
  console.log(props);
  const {addNewToDo} = props;

  //addNewToDo("eric"); //fire
  const handleClick = () => {
    alert("Click me");
  };

  const handleOnChange = (name) => {
    console.log(">>> handleOnChange", name);
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
    </div>
  );
};

export default TodoNew;
