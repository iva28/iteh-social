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

function App() {

  //proba za protekciju ruta
  const currentUser = true


  const Layout = () => {
    return (<div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <LeftBar />
        <div style = {{flex : 6}}>
          <Outlet />
        </div>
        <RightBar />
      </div>
    </div>
    );
  }
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }
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
        }
      ]
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
