/* eslint-disable react/prop-types */
import React from 'react'
import StoryTile from './StoryTile'
import './TileContainer.css'

const TileContainer = ({ stories }) => {
  const allStories = stories.map((article) => {
    return (
      <div key={article.uri} className='single-story'>
        <StoryTile {...article} />
      </div>
    )
  })

  return (
    <div className='tile-container'>{allStories}</div>
  )
}

export default TileContainer
