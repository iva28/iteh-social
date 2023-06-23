import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/login/Login";
import {
  RouterProvider,
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import Register from "./pages/register/Register";
import "./style.scss";

import Navbar from "./components/navBar/NavBar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  console.log("kod");
  //proba za protekciju ruta
  // const currentUser = true

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios
      .get("http://localhost:8000/api/currentUser")
      .then((result) => {
        setCurrentUser(result.data.data); //jedno .data je iz axiosa drugo iz laravela
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const Layout = () => {
    return currentUser ? (
      <div>
        <Navbar currentUser={currentUser} />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    ) : (
      <div class="lds-heart">
        <div></div>
      </div>
    );
  };
  const ProtectedRoute = ({ children }) => {
    // if (currentUser) {
    //   return <Navigate to="/login" />
    // }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile",
          element: <Profile currentUser={currentUser} />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login setCurrentUser={setCurrentUser} />,
    },
    {
      path: "/register",
      element: <Register setCurrentUser={setCurrentUser} />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
