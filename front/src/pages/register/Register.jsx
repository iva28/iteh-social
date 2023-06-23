import React from 'react'
import "./register.scss"
import { Link } from 'react-router-dom'

import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Register({setCurrentUser}) {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        'username': "",
        'password': '',
        'name' : "",
        'surname': "",
        "date_birth": "",
        "bio" : ""
      }
      );

      function registerUser(event) {
        event.preventDefault();
        axios.defaults.withCredentials = true; //da mi uvek salje cookies back front
        axios.post("http://localhost:8000/api/register", user).then((response) => {
          if (response.data.success === false) {

          } else {
            setCurrentUser(response.data.data);
            navigate("/");
          }
        }
        );
      }

    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>ITEH SOCIAL MEDIA</h1>
                    <span>Do you have an account?</span>

                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form>
                    <input type="text" placeholder="Name" onChange={e => setUser({ ...user, name: e.target.value })} />
                        <input type="text" placeholder="Surname" onChange={e => setUser({ ...user, surname: e.target.value })} />
                        <input type="text" placeholder="Username" onChange={e => setUser({ ...user, username: e.target.value })}/>
                        <input type="password" placeholder="Password" onChange={e => setUser({ ...user, password: e.target.value })}/>
                        <input type="date" placeholder="Date of birth" onChange={e => setUser({ ...user, date_birth: e.target.value })} />
                        <input type="text" placeholder="Bio" onChange={e => setUser({ ...user, bio: e.target.value })} />
                        <button on onClick={registerUser}>Register</button>

                    </form>
                </div>
            </div>
        </div>
    )
}
