import React from 'react'
import '../App.jsx'
import '../HeaderComponent/header.css'

function Header() {
  return (
    <div className='header'>
      <div className='logo'>Logo</div>
      <div className='title'>PokéData</div>
      <div className='attribution'>Attribution</div>
      <div className='searchBar'>
        <input type='text' placeholder='Search pokemon...' />
      </div>
    </div>
  )
}

export default Header
