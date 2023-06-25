import React from 'react'
import "./profile.scss"
import ProfileHeader from '../../components/profile_header/ProfileHeader';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Post from '../../components/post/Post';
import { useParams } from 'react-router-dom';

function ProfileFriend() {

  //vraca listu postova za currentUser
  const [posts, setPosts] = useState([]);
  const params = useParams();
  const id = params.id;

  const[friend, setFriend] = useState();


  useEffect(() => {
    console.log(params.id);
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:8000/api/posts/"+params.id).then((result) => {
      setPosts(result.data.data); 
    }).catch((err) => {
      console.log(err);
    });

    axios.get("http://localhost:8000/api/user/"+params.id).then((result) => {
       setFriend(result.data.data);
      }).catch((err) => {
        console.log(err);
      });

  }, [id])


  return (
    <div className="profile">
      <ProfileHeader profile={friend} my={false} />
      <div className='posts'>
        {posts.map(post => (
          <Post post={post} key={post.id} />
        ))}
      </div>

    </div>
  )
}

export default ProfileFriend