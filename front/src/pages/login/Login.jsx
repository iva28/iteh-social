import React from 'react'
import "./login.scss"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

export default function Login({ setCurrentUser }) {

  const navigate = useNavigate();
  const [user, setUser] = useState({
    'username': "",
    'password': '',
  }
  );

  async function loginUser(event) {
    event.preventDefault();
    axios.defaults.withCredentials = true; //da mi uvek salje cookies back front
    await axios.get("http://localhost:8000/sanctum/csrf-cookie");
    axios.post("http://localhost:8000/api/login", user).then((response) => {
      if (response.data.success === false) {

      } else {
        setCurrentUser(response.data.data);
        navigate("/");
      }
    }
    );
  }
  return (
    <div className='login'>
      <div className="card">
        <div className="left">
          <h1>Hello</h1>
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
