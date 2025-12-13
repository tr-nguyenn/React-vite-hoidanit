const TodoNew = (props) => {
  console.log(props);
  const {addNewToDo} = props;

  //addNewToDo("eric");
  return (
    <div className="todo-new">
      <input type="text" className="inputTodo" placeholder="Enter your task" />
      <button className="btnAdd">Add</button>
    </div>
  );
};

export default TodoNew;
