import React from 'react'
import "./stories.scss"

function Stories() {
  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "Neko Neko",
      img: "https://source.boringavatars.com/beam/120/iva?colors=cbd5e1,5b21b6,c4b5fd,a78bfa,7c3aed",
    },
    {
      id: 2,
      name: "Neko Neko",
      img: "https://source.boringavatars.com/beam/120/iva?colors=cbd5e1,5b21b6,c4b5fd,a78bfa,7c3aed",
    },
    {
      id: 3,
      name: "Neko Neko",
      img: "https://source.boringavatars.com/beam/120/iva?colors=cbd5e1,5b21b6,c4b5fd,a78bfa,7c3aed",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src="https://source.boringavatars.com/beam/120/iva?colors=cbd5e1,5b21b6,c4b5fd,a78bfa,7c3aed"
          alt="" />
        <span>"Pera Peric"</span>
        <button>+</button>
      </div>
      {stories.map(story => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories

