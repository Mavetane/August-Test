import React from 'react';
import { useState } from 'react';

const Register = () => {
  const [formInfo, setFormInfo] = useState({ email: "", password: "" })

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("formInfo", formInfo)
    setFormInfo({
      email: "", password: ""
    })
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
        <button>Submit</button>
      </form>
    </div>)
}


export default Register;