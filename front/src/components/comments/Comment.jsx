import React from 'react'
import "./comment.scss"

function Comment({ comment }) {
    return (
        
        <div className='comment'>
            <div className="container">
                <div className="user">
                    <img src={`https://source.boringavatars.com/beam/120/${comment.username}?colors=cbd5e1,5b21b6,c4b5fd,a78bfa,7c3aed`} alt="" />
                    <div className="userInfo">{comment.name} {comment.surname}</div>
                </div>
                <div className="text">
                    {comment.content}
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Comment
