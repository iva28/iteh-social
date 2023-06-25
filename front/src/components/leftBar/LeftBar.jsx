import React from 'react'


import "./leftBar.scss"

import Friends from "../../images/friends.png"
import Gallery from "../../images/gallery.png"
import Message from "../../images/message.jpg"
import Videos from "../../images/videos.png"
import { useState } from 'react'
import Modal from 'react-modal';
import { Link } from 'react-router-dom'
Modal.setAppElement('#root');


export default function LeftBar() {

  const [isOpen, setIsOpen] = useState(false);

  const [adresa, setAdresa] = useState('');


  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };


  const checkIpAdress = async () => {
    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      setAdresa(data);
      console.log(data);

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='leftBar'>
      <div className="container">
        <div className="menu">
          {/* <Link to="/profile" className="user">
            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />
            <span>Pera Peric</span>
          </Link>
          </Link> */}
          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Message} alt="" onClick={openModal} />
            <span>Message</span>
          </div>
        </div>
        <hr />

        {/* Za modal za slanje poruka */}
        <Modal isOpen={isOpen} onRequestClose={closeModal} style={{
          overlay: {

            backdropFilter: 'blur(5px)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            height: '400px',
            width: '600px',
            backgroundColor: ' rgba(255, 192, 203, 0.489)',
            padding: '20px',
            borderRadius: '20px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
            fontSize: '20px',


          },
        }}>
          <h2 style={{ color: 'white', alignItems: 'center' }}>Unesite poruku</h2>
          <select style={{ height: '35px' }}>
            <option value="friend1">Neko Neko</option>
            <option value="friend2">Neko Neko</option>
            <option value="friend3">Neko Neko</option>
          </select>
          <input type="text" placeholder="Send a message" style={{
            height: '30px'
          }} />

          <button onClick={closeModal} style={{
            border: 'none',
            padding: '10px 15px',
            borderRadius: '3px',
            cursor: 'pointer',
            fontWeight: '200px',
            color: ' rgba(75, 7, 75, 0.507)'
          }}>Close</button>
        </Modal>
        </div>
      <div>
        {adresa ? (
          <div className="adress">
            <div className="adress-item">Your IP adress: {adresa.ip}</div>
            <div className="adress-item">Country and city: {adresa.country_name}, {adresa.city}</div>
          </div>
        ) : (
          <button onClick={checkIpAdress} style={{ color: 'white', backgroundColor: 'purple', padding: '10px', fontWeight : 'bold' }}>Show IP adress</button>
        )}

      </div>
    </div>
  )
}
