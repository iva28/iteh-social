import logo from './logo.svg';
import './App.css';
import Login from './pages/login/Login';
import { RouterProvider, BrowserRouter as Router, Routes, Route, Outlet, createBrowserRouter, Navigate } from 'react-router-dom';
import Register from './pages/register/Register';
import "./style.scss";

import Navbar from "./components/navBar/NavBar"
import LeftBar from "./components/leftBar/LeftBar"
import RightBar from "./components/rightBar/RightBar"
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PostsSearch from './components/posts/PostsSearch';
import ProfileFriend from './pages/profile/ProfileFriend';
import AdminUsers from './pages/users/AdminUsers';
import Admin from './pages/login/Admin';

function App() {
  console.log("kod");
  //proba za protekciju ruta
  // const currentUser = true

  const [currentUser, setCurrentUser] = useState(null);


  //ubacivanje postova za searchovane 
  const[friendPosts, setFriendPosts] = useState(null);

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:8000/api/currentUser").then((result) => {
        setCurrentUser(result.data.data); //jedno .data je iz axiosa drugo iz laravela
    }).catch((err) => {
        console.log(err);
    });
},[])

  const Layout = () => {
    return (
      currentUser ?
        <div>
          <Navbar currentUser={currentUser} setFriendPosts = {setFriendPosts}/>
          <div style={{ display: "flex" }}>
            <LeftBar />
            <div style={{ flex: 6 }}>
              <Outlet />
            </div>
            <RightBar />
          </div>
        </div> : <div class="lds-heart"><div></div></div>
    );
  }
  const ProtectedRoute = ({ children }) => {
    // if (currentUser) {
    //   return <Navigate to="/login" />
    // }
    return children
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute><Layout /></ProtectedRoute>,
      children: [
        {
          path: "/",
          element: <Home />
        },

        {
          path: "/profile",
          element: <Profile currentUser= {currentUser}/>
        } , 
        {
          path: '/post/search',
          element :  <PostsSearch friendPosts= {friendPosts} setFriendPosts = {setFriendPosts}/>
        } ,
        //ruta za profile korisnika
        {
          path: "/profile/:id",
          element : <ProfileFriend />
        }
      ]
    },
    {
      path: "/login",
      element: <Login setCurrentUser={setCurrentUser} />
    },
    {
      path: "/register",
      element: <Register setCurrentUser = {setCurrentUser}/>
    },
    {
      path: "/admin/users",
      element: <AdminUsers />
    },
    {
      path: "/login/admin",
      element: <Admin />
    },
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
