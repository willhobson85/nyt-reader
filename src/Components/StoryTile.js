import React from "react";
import { Link } from 'react-router-dom'
import './StoryTile.css'
import placeholderImage from '../assets/times-symbol.jpeg'

const StoryTile = ({title, updated_date, byline, multimedia }) => {
  // I want to add images to this 
  
  return(
    <div className="story-tile" id={title}>
      <Link to={`/${title}`}>
        <h1>{title}</h1>
        <img src={!multimedia ? placeholderImage : multimedia[0].url} alt={title}/>
        <h3>{byline}</h3>
      </Link>
    </div>
  )
}

export default StoryTile