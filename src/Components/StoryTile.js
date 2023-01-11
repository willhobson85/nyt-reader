import React from "react";
import { Link } from 'react-router-dom'
import './StoryTile.css'

const StoryTile = ({title, updated_date, byline }) => {
  // I want to add images to this 
  
  return(
    <div className="story-tile" id={title}>
      <Link to={`/${title}`}>
        <h1>{title}</h1>
        <h3>{updated_date}</h3>
        <h3>{byline}</h3>
      </Link>
    </div>
  )
}

export default StoryTile