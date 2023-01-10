import React from "react";
import StoryTile from "./StoryTile";
import './TileContainer.css'

const TileContainer = ({stories}) => {
  const storyList = stories.map((article) => {
    return (
      <div key={article.uri} className='single-story'>
        <StoryTile {...article} />
      </div>
    )
  })

  return( 
    <div className='tile-container'>
      {storyList}
    </div>
  )
}

export default TileContainer