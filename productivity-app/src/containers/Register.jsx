import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_USER } from '../redux/actions/actionTypes';
import axios from 'axios';


const Register = () => {
  const [formInfo, setFormInfo] = useState({ email: "", password: "" })
  const users = useSelector(state => state.users)
  const dispatch = useDispatch();


  const onSubmit = (e) => {
    e.preventDefault();
    console.log("formInfo", formInfo)
    setFormInfo({
      email: "", password: ""
    })
  }
  const saveUser = () => {
    return async dispatch => {
      try {
        const { data } = await axios.post("mongodb+srv://Mavetane:Lindile25@firstcluster-vbvoq.mongodb.net/firstCluster?retryWrites=true&w=majority", { formInfo })
        console.log("data", data)
        dispatch({
          type: ADD_USER,
          payload: data
        })
      }
      catch (e) {
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
      <form onSubmit={(e) => onSubmit(e)}>
        <input type="email" value={formInfo.email} onChange={handleChange} name="email" />
        <input type="password" value={formInfo.password} onChange={handleChange} name="password" />
        <button onClick={() => saveUser()}>Submit</button>
      </form>
    </div>)
}


export default Register;