import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import "./adminUsers.scss";

function AdminUsers() {

    const [users, setUsers] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        axios.defaults.withCredentials = true;
        axios.get("http://localhost:8000/api/allUsers").then((result) => {
            setUsers(result.data.data);
        }).catch((err) => {
            console.log(err);
        });
    }, [])

    function loadUsers() {
        axios.get("http://localhost:8000/api/allUsers").then((result) => {
            setUsers(result.data.data);
        }).catch((err) => {
            console.log(err);
        });
    }
    function deleteUser(id) {
        axios.delete("http://localhost:8000/api/delete/user/" + id).then(() => {
            loadUsers();
        });
    }

    function logoutAdmin() {
        axios.defaults.withCredentials = true; //da mi uvek salje cookies back front
        axios.post("http://localhost:8000/api/logoutAdmin").then(() => {
            navigate("/login/admin");
        }
        );
    }

    return (
        <div className="useric">
            <button className = "buttonic" onClick={logoutAdmin}>Logout</button>
            {users.map(user => (
                <div className="post">
                    <div className="container">
                        <div className="user">
                            <div className="userInfo">
                                <img src={`https://source.boringavatars.com/beam/120/${user.name}?colors=cbd5e1,5b21b6,c4b5fd,a78bfa,7c3aed`} alt="" />
                                <div className="details">
                                    <span className="name">{user.name} {user.surname}</span>
                                </div>
                                <button className = "buttonic" onClick={() => deleteUser(user.id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))
            }
        </div>
    )
}

export default AdminUsers
