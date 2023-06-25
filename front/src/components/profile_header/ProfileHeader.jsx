import React from 'react'
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

function ProfileHeader({ profile, my }) {


    const navigate = useNavigate();

    function addFollower(id) {
        axios.post("http://localhost:8000/api/friend/addFriends/" + id).then(result => {

        });
    }

    function deleteProfile() {
        axios.delete("http://localhost:8000/api/delete").then(() => {
            navigate("/login");
        });
    }

    return (

        profile ?
            <div className="profile">
                < div className="images" >
                    <img
                        src="https://images.pexels.com/photos/5560471/pexels-photo-5560471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        className="cover"
                    />
                    <img
                        src={`https://source.boringavatars.com/beam/120/${profile.username}?colors=cbd5e1,5b21b6,c4b5fd,a78bfa,7c3aed`}
                        alt=""
                        className="profilePic"
                    />
                </div >
                <div className="profileContainer">
                    <div className="uInfo">
                        <div className="left">
                            <a href="">
                                <FacebookTwoToneIcon fontSize="large" />
                            </a>
                            <a href="">
                                <InstagramIcon fontSize="large" />
                            </a>
                            <a href="">
                                <TwitterIcon fontSize="large" />
                            </a>
                        </div>
                        <div className="center">
                            <span>{profile.name} {profile.surname}</span>
                            <div className="info">
                                <div className="item">
                                    <PlaceIcon />
                                    <span>Serbia</span>
                                </div>
                                <div className="item">
                                    <LanguageIcon />
                                    <span>ITEH SOCIAL</span>
                                </div>
                            </div>
                            {!my ? <button onClick={() => { addFollower(profile.id) }} >Follow</button> : ""}
                        </div>
                        <div className="right">
                            {my ? <DeleteForeverOutlinedIcon fontSize="large" onClick={deleteProfile} /> : ""}
                        </div>
                    </div>
                </div>
            </div > : <h1>Loading..</h1>

    )
}

export default ProfileHeader