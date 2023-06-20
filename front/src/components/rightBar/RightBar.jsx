import React, { useState } from 'react'
import "./rightBar.scss"
import axios from 'axios';
import { useEffect } from 'react';

function RightBar() {

  const [friends, setFriends] = useState([]);
  const [noFriends, setNoFriends] = useState([]);

  function loadFriends() {
    axios.defaults.withCredentials = true; //da mi uvek salje cookies back front
    axios.get("http://localhost:8000/api/friend/getAll").then((result) => {
      setFriends(result.data.data); //jedno .data je iz axiosa drugo iz laravela
    }).catch((err) => {
      console.log(err);
    });

    axios.get("http://localhost:8000/api/friend/getNoFriends").then((result) => {
      setNoFriends(result.data.data); //jedno .data je iz axiosa drugo iz laravela
    }).catch((err) => {
      console.log(err);
    });
  }
  
  useEffect(() => {
    loadFriends();
  }, [])

  function addFollower(id) {
    axios.post("http://localhost:8000/api/friend/addFriends/" + id).then(result => {
      loadFriends();
    });
  }
  return (

    <div className='rightBar'>
      <div className="container">
        <div className="item">
          <span>Suggestions for you</span>
          {noFriends.map(friend => (
            <div className="user">
              <div className="userInfo">
                <img
                  src={`https://source.boringavatars.com/beam/120/${friend.name}?colors=cbd5e1,5b21b6,c4b5fd,a78bfa,7c3aed`}
                  alt=""
                />
                <span>{friend.name} {friend.surname}</span>
              </div>
              <div className="buttons" onClick={() => {addFollower(friend.id)}}>
                <button>Follow</button>
              </div>
            </div>
          ))}

        </div>
        <div className="item">
          <span>My friends</span>
          {friends.map(friend => (
            <div className="user">
              <div className="userInfo">
                <img
                  src={`https://source.boringavatars.com/beam/120/${friend.name}?colors=cbd5e1,5b21b6,c4b5fd,a78bfa,7c3aed`}
                  alt=""
                />
                <span>{friend.name} {friend.surname}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div >
  )
}

export default RightBar
