/* eslint-disable camelcase */
import React from 'react'
import { Link } from 'react-router-dom'
import placeholderImage from '../assets/times-symbol.jpeg'
import './DetailedPage.css'

const DetailedPage = (match) => {
  const { title, byline, abstract, short_url, multimedia } = match

  return (
    <div className='detailed-page'>
      <h1 className="detailed-title">{title}</h1>
      <p className="detailed-byline">{byline}</p>
      <img src={!multimedia ? placeholderImage : multimedia[0].url} alt={title}/>
      <p className="detailed-abstract">{abstract}</p>
      <a className="detailed-link" href={short_url}>Click here to see the full story on the New York Times website</a>
      <br />
      <Link to='/'><button id='home'>Return Home</button></Link>
    </div>
  )
}

export default DetailedPage
