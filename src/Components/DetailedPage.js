import React from "react";
import placeholderImage from '../assets/times-symbol.jpeg'
import './DetailedPage.css'

const DetailedPage = (match) => {
  const {title, byline, abstract, short_url, multimedia} = match

  return(
    <div className='detailed-page'>
      <h1>{title}</h1>
      <p>{byline}</p>
      <img src={!multimedia ? placeholderImage : multimedia[0].url} alt={title}/>
      <p>{abstract}</p>
      <a href={short_url}>Click here to see the full story on the New York Times website</a>

    </div>
  )
}

export default DetailedPage