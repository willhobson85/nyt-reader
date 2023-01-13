/* eslint-disable react/prop-types */
import React from 'react'

const Header = ({ sorting }) => {
  return (
    <div className="header" data-cy='header-test'>
      <h1>NYT Top Stories</h1>
      <div className="sort-buttons">
        <button className="alpha" onClick={() => sorting('down')}>Sort a-z</button>
        <button className="zed" onClick={() => sorting('up')}>Sort z-a</button>
      </div>
    </div>
  )
}

export default Header
