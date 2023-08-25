import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './card.css';

function Card({ project }) {
  const { id, name, image, url } = project;
  
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="card-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={`/projects/${id}`}>
        <img
          src={image}
          alt="Image Not Found."
          className={`mainImage ${isHovered ? 'opaque' : ''}`}
        />
        {isHovered && (
          <div className="message">Click here for more details</div>
        )}
      </Link>
      <h2>{name}</h2>
      <Link to={url} target="_blank">
        <button>Project Link</button>
      </Link>
    </div>
  );
}

export default Card;
