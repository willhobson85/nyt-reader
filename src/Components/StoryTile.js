/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import './StoryTile.css'
import placeholderImage from '../assets/times-symbol.jpeg'

const StoryTile = ({ title, byline, multimedia }) => {
  return (
    <div className="story-tile" id={title}>
      <Link to={`/${title}`}>
        <h1 className="article-title tile-title">{title}</h1>
        <img className="story-image tile-image" src={!multimedia ? placeholderImage : multimedia[0].url} alt={title}/>
        <h3 className="tile-byline">{byline}</h3>
      </Link>
    </div>
  )
}

export default StoryTile
