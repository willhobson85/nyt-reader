import React from "react";
import './StoryTile.css'

const StoryTile = ({title, byline, abstract}) => {
  // I want to add images to this
  return(
    <div className="story-tile">
      <h1>{title}</h1>
      <h2>{abstract}</h2>
      <h3>{byline}</h3>
    </div>
  )
}

export default StoryTile