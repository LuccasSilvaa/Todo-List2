import React, { useState } from 'react';
import * as S from "./TodoListStyle"

export default function TodoList() {
  const [input, setInput] = useState('');
  const [taskList, setTaskList] = useState([]);

  const Add = () => {
    let itensInput = {
      value: input,
      id: Date.now(),
    };

    if (input !== '') {
      setTaskList([...taskList, itensInput]);
      setInput('');
    }

  };
  function DeleteTask(itemTracker) {
    const ListFilter = taskList.filter(item => item.id !== itemTracker);
    setTaskList(ListFilter);
  }

  return (
  <S.TodoList>
    
      <h1>Todo-List</h1>

    <form onSubmit={(e) => {e.preventDefault();}}>
      <S.AddTask>
      <input value={input} onChange={(e) => {setInput(e.target.value);}} />
      <button
        onClick={() => { Add();}}>+</button>

      </S.AddTask>
         <S.TaskList>
        <ul>
        {taskList.map((item) => (
          <S.Task>
            {item.value}
            <button onClick={() => {DeleteTask(item.id)}}>x</button>
          </S.Task>
        ))}
        </ul>
         </S.TaskList>       
    </form>
   
  </S.TodoList>
  );
}
