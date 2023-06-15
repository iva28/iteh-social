import React from 'react'
import "./login.scss"
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

export default function Login() {

  const navigate = useNavigate();
  const [user, setUser] = useState({
    'username': "",
    'password': '',
  }
  );

  async function loginUser(event) {
    event.preventDefault();
    console.log("stigao");
    axios.defaults.withCredentials = true; //da mi uvek salje cookies back front
    await axios.get("http://localhost:8000/sanctum/csrf-cookie");
    navigate("/"); 
  }
  return (
    <div className='login'>
      <div className="card">
        <div className="left">
          <h1>Hello</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form >
            <input type="text" placeholder='Username' onChange={e => setUser({ ...user, username: e.target.value })} />
            <input type="password" placeholder='Password' onChange={e => setUser({ ...user, password: e.target.value })} />
            <button onClick={loginUser}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}
