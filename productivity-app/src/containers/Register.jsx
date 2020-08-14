import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_USER } from '../redux/actions/actionTypes';
import axios from 'axios';
import Todo from './Todo';
import Timer from './Timer';


const Register = () => {
  const [formInfo, setFormInfo] = useState({ email: "", password: "" })
  const [status, setStatus] = useState(false)
  const users = useSelector(state => state.users)
  const dispatch = useDispatch();


  const onSubmit = (e) => {
    e.preventDefault();
    console.log("formInfo", formInfo)
    setFormInfo({
      email: "", password: ""
    })
    setStatus(true)
  }
  const addUser = (formInfo) => {
    return async dispatch => {
      try {
        console.log("formInfo", { formInfo })
        await axios.post("http://localhost:3002/users", { ...formInfo })
        dispatch({
          type: ADD_USER,
          payload: { formInfo }
        })
      } catch (e) {
        console.log(e)
      }
    }
  }

  const handleChange = (e) => {
    setFormInfo({
      ...formInfo, [e.target.name]: e.target.value
    })

  }
  return (
    <div>
      <h1>Register</h1>
      {status == false ?
        <form onSubmit={(e) => onSubmit(e)}>
          <input type="email" value={formInfo.email} onChange={handleChange} name="email" />
          <input type="password" value={formInfo.password} onChange={handleChange} name="password" />
          <button onClick={() => addUser()}>Submit</button>
        </form> :
        <div>
          <Todo />
          <Timer />
        </div>}
    </div>)
}


export default Register;