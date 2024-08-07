import React,{useState} from 'react'
import './loginstyle.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const [value,setValue]=useState({
    email:'',
    password:''
  });
  const navigate=useNavigate()
  axios.defaults.withCredentials=true
  const handleSubmit=(event)=>{
    event.preventDefault();
    axios.post('http://localhost:5000/auth/adminlogin',value)
    .then(result=> 
      navigate('/dashboard'))
    .catch(err=>alert("wrong email or Password:"))
  }
  return (
    <>
    <div class="form-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="name">Email:</label>
            <input type="email" id="name" name="username" placeholder="Enter your email" required autocomplete="off" onChange={(e)=>setValue({...value,email:e.target.value})}/>
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="password" required onChange={(e)=>setValue({...value,password:e.target.value})}/>
          </div>
          <button type="submit" class="submit-btn">Login</button>
        </form>
      </div>
      </>
  )
}

export default Login