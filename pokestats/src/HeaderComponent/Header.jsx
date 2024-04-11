import React, { useState } from 'react'
import '../App.jsx'
import '../HeaderComponent/header.css'

function Header({ setSearchTerm }) {
  const [searchValue, setSearchValue] = useState('')

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value)
    setSearchTerm(event.target.value.toLowerCase())
  }

  return (
    <div className='header'>
      <div className='logo'>Logo</div>
      <div className='title'>PokéData</div>
      <div className='attribution'>Attribution</div>
      <div className='searchBar'>
        <input
          type='text'
          placeholder='Search pokemon...'
          value={searchValue}
          onChange={handleSearchInputChange}
        />
      </div>
    </div>
  )
}

export default Header
