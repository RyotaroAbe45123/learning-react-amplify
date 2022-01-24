import React, { useState} from "react";
import "./index.css";

export const App = () => {
  console.log("start");
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([
    "hoge",
    "fuga"
  ]);
  const [completeTodos, setCompleteTodos] = useState([
    "foo",
    "bar"
  ]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAddTodo = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  }

  const onClickComplete = (index) => {
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);
  }

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  }

  const onClickBack = (index) => {
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  }


  return (
    <>
      <div className="input-area">
        <input placeholder="Input TODO" value={todoText} onChange={onChangeTodoText} />
        <button onClick={onClickAddTodo}>Add</button>
      </div>
      <div className="incomplete-area">
        <p className="title">Incomplete List</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>Complete</button>
              <button onClick={() => onClickDelete(index)}>Delete</button>
            </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">Complete List</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>Back</button>
            </div>  
            )
          })}
        </ul>
      </div>
    </>
  );
}

export default App;