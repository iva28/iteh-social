import React, { useEffect, useState } from 'react'
import "./posts.scss"
import Post from '../post/Post';
import axios from 'axios';


function PostsSearch({ friendPosts, setFriendPosts }) {
    const [posts, setPosts] = useState([]);

    return (
        <div className='posts' >
            {friendPosts.map(post => (
                <Post post={post} key={post.id} />
            ))}
        </div>
    )
}

export default PostsSearch