import React from 'react'
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import "./post.scss";
import axios from 'axios';
import { useState , useEffect} from 'react'
import Comment from '../comments/Comment';


function Post({ post }) {
    const [liked, setLiked] = useState(post.liked);
    const [like_count, setLikeCount] = useState(post.likes_count);
    const [comments, setComments] = useState([]);
    const [commentOn, setCommentOn] = useState(false);
    const [comment, setComment] = useState(null);

    function manageLike() {
        console.log(post.liked)
        axios.post("http://localhost:8000/api/like/" + post.id).then(() => {
            post.liked = !post.liked;
            console.log(post.liked)
            setLiked(!liked);
            if (!liked)
                setLikeCount(like_count + 1);
            else setLikeCount(like_count - 1);
        });
    }

    function manageComments() {
        axios.get("http://localhost:8000/api/comments/" + post.id).then((response) => {
            if (!commentOn) {
                setComments(response.data.data);
                setCommentOn(true);
            }
            else {
                setCommentOn(false);
                setComments([]);
            }
        });
    }

    function addComment() {
        axios.post("http://localhost:8000/api/comments/" + post.id, { 'content': comment }).then(() => {
            manageComments();
            setComment(null);
        })
    }

    return (
        <div className="post">
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img src={post.image} alt="" />
                        <div className="details">
                            <span className="name">{post.name} {post.surname}</span>
                            <span className="date">{post.created_at}</span>
                        </div>
                    </div>

                </div>
                <div className="content">
                    <p>{post.body}</p>
                    <img src={post.image} alt="" />
                </div>
                <div className="info">
                    <div className="item" >
                        {liked ? <FavoriteOutlinedIcon onClick={manageLike} /> : <FavoriteBorderOutlinedIcon onClick={manageLike} />}
                        {like_count}
                    </div>
                    <div className="item" >
                        <TextsmsOutlinedIcon onClick={manageComments} />
                        {post.comments_count} Comments
                    </div>

                </div>

            </div>

            <div className="comment">
                <div className="new">
                    <input type="text" placeholder='Add comment...' onChange={e => setComment(e.target.value)} />
                    <button onClick={addComment}> Add</button>
                </div>
                {comments.map(comment => (
                    <Comment comment={comment} />
                ))}
            </div>
        </div>
    )
}

export default Post
