import React from 'react'
import "./profile.scss"
import ProfileHeader from '../../components/profile_header/ProfileHeader';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Post from '../../components/post/Post';

function Profile({ currentUser }) {

  //vraca listu postova za currentUser
  const [posts, setPosts] = useState([]);

  const [post, setOnePost] = useState({
    'content': ""
  })

  function loadPosts() {
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:8000/api/myPosts").then((result) => {
      setPosts(result.data.data); //jedno .data je iz axiosa drugo iz laravela
    }).catch((err) => {
      console.log(err);
    });
  }

  useEffect(() => {
     
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:8000/api/myPosts").then((result) => {
      setPosts(result.data.data); //jedno .data je iz axiosa drugo iz laravela
    }).catch((err) => {
      console.log(err);
    });
  }, [])

  function createPost(event) {
    event.preventDefault();
    axios.defaults.withCredentials = true; //da mi uvek salje cookies back front
    axios.post("http://localhost:8000/api/addPost", post).then((response) => {
      loadPosts();
      setOnePost("");
    }
    );
  }
  return (
    <div className="profile">
      <ProfileHeader profile={currentUser} my={true} />

      <form className='forma'>
        <textarea placeholder="Enter post content.." onChange={e => setOnePost({ ...post, content: e.target.value })}></textarea>
        <button onClick={createPost}>Post</button>
      </form>

      <div className='posts'>
        {posts.map(post => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  )
}

export default Profile
