import React, { useEffect, useState } from 'react'
import "./posts.scss"
import Post from '../post/Post';
import axios from 'axios';

function Posts() {
    const [posts, setPosts] = useState([]);
    const [notLiked, setNotLiked] = useState(false); //za nelajkovane postove

    useEffect(() => {
        axios.defaults.withCredentials = true;
        axios.get("http://localhost:8000/api/posts").then((result) => {
            setPosts(result.data.data); //jedno .data je iz axiosa drugo iz laravela
        }).catch((err) => {
            console.log(err);
        });
    }, [])

    function notLikedPosts() {
        axios.get("http://localhost:8000/api/posts/notLiked").then((result) => {
            setPosts(result.data.data);
            setPosts(result.data.data);
        }).catch((err) => {
            console.log(err);
        });
    }
    return (
        <div className='posts'>
            <button className='button-sort' onClick={notLikedPosts}>Show unliked posts</button>
            {posts.map(post => (
                <Post post={post} key={post.id} />
            ))}
        </div>
    )
}

export default Posts
