import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_TODO } from '../redux/actions/actionTypes';

/**
 * 
 */
const Todo = () => {
  const [listOfTodos, setTodo] = useState({ todo: "", status: false })
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const onSubmit = e => {
    e.preventDefault();
    console.log("todo", listOfTodos)
  }
  const handleChange = e => {
    setTodo({
      ...listOfTodos, [e.target.name]: e.target.value
    })
  }
  return (
    <div>
      <h4>Add Todo</h4>
      <form onSubmit={(e) => { onSubmit(e) }}>
        <input type="text" value={listOfTodos.todo} onChange={handleChange} name="todo" />
        <button onClick={() => dispatch({ type: ADD_TODO, payload: listOfTodos })}>Add Todo</button>
      </form>
      <br />
      <h4>List of Todos</h4>
      {/* <label>{todos}</label> */}
    </div>
  )
}


export default Todo;