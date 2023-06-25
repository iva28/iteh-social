import React from 'react'
import "./navBar.scss"
//dodajemo ikonice
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import Modal from 'react-modal';
import Post from '../post/Post';
import PostsSearch from '../posts/PostsSearch';

Modal.setAppElement('#root');

function NavBar({ currentUser, setFriendPosts }) {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  //prebacivanje na stranicu sa pretrazenim postovima
  const researched = useNavigate();

  const [user, setUser] = useState({
    'name': ""
  })
  function logoutUser(event) {
    axios.defaults.withCredentials = true; //da mi uvek salje cookies back front
    axios.post("http://localhost:8000/api/logout").then(() => {
      navigate("/login");
    }
    );
  }

  function searchUser(event) {
    console.log(user.name)
    event.preventDefault();
    axios.defaults.withCredentials = true; //da mi uvek salje cookies back front
    axios.get("http://localhost:8000/api/posts/user/" + user.name).then((response) => {
      if (response.data.success === false) {
        console.log(response.data);
      } else {
        console.log(response.data.data);
        setFriendPosts(response.data.data);
        researched("/post/search");
      }
    }
    );
  }

  return (
    <div className='navBar'>
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>ITEH SOCIAL</span>
        </Link>
        <HomeOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon onClick={searchUser} />
          <input type="text" placeholder='Search...' onChange={e => setUser({ ...user, name: e.target.value })} />
        </div>
      </div>
      <div className="right">
      <LogoutOutlinedIcon onClick={logoutUser} />
        <Link to="/profile" className="user">
          <img src={`https://source.boringavatars.com/beam/120/${currentUser.username}?colors=cbd5e1,5b21b6,c4b5fd,a78bfa,7c3aed`}
            alt="" />
          <span>{currentUser.name} {currentUser.surname}</span>
        </Link>
      </div>
    </div>
  )
}

export default NavBar
