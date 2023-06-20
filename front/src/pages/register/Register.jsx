import React from 'react'
import "./register.scss"
import { Link } from 'react-router-dom'

export default function Register() {
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
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Surname" />
                        <input type="password" placeholder="Username" />
                        <input type="text" placeholder="Password" />
                        <button>Register</button>

                    </form>
                </div>
            </div>
        </div>
    )
}
