import React from 'react'
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import "./post.scss"

function Post({post}) {

    
  //TEMPORARY
  const liked = false;
  
    return (
        <div className="post">
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img src={post.profilePic} alt="" />
                        <div className="details">
                            <span className="name">{post.name}</span>
                            <span className="date">"Datum neki"</span>
                        </div>
                    </div>
                   
                </div>
                <div className="content">
                    <p>{post.desc}</p>
                    <img src={post.img} alt="" />
                </div>
                <div className="info">
                    <div className="item">
                        {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
                        12 Likes
                    </div>
                    <div className="item">
                        <TextsmsOutlinedIcon />
                        12 Comments
                    </div>
                 
                </div>
               
            </div>
        </div>
    )
}

export default Post
