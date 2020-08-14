import React from 'react';
import { useState } from 'react';


const Todo = () => {
  const [list, setList] = useState({ todo: "", status: false })


  const onSubmit = (e) => {
    e.preventDefault();
    console.log("formInfo", list)

  }

  const handleChange = (e) => {
    setList({
      ...list, [e.target.name]: e.target.value
    })

    return (
      <div>
        <h3>Register</h3>
        <form onSubmit={(e) => onSubmit(e)}>
          <input type="text" value={list.todo} onChange={handleChange} name="todo" />
          <input type="check" value={list.status} onChange={handleChange} name="status" />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default Todo;