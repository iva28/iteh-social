import React from 'react'
import "./profile.scss"
import ProfileHeader from '../../components/profile_header/ProfileHeader';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Post from '../../components/post/Post';

function Profile({ currentUser }) {

  //vraca listu postova za currentUser
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      axios.defaults.withCredentials = true;
      axios.get("http://localhost:8000/api/myPosts").then((result) => {
          setPosts(result.data.data); //jedno .data je iz axiosa drugo iz laravela
      }).catch((err) => {
          console.log(err);
      });
  },[])

  return (
    <div className="profile">
      <ProfileHeader profile={currentUser} my={true} />
      <div className='posts'>
        {posts.map(post => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  )
}

export default Profile
