import React, { useState } from 'react'
import '../App.jsx'
import '../HeaderComponent/header.css'

function Header({ setSearchTerm }) {
  const [searchValue, setSearchValue] = useState('') 
  
  let pokeTypeFilters = [
    'normal',
    'fighting',
    'flying',
    'poison',
    'ground',
    'rock',
    'bug',
    'ghost',
    'steel',
    'fire',
    'water',
    'grass',
    'electric',
    'psychic',
    'ice',
    'dragon',
    'dark',
    'fairy',
  ]
  const [toggledButtons, setToggledButtons] = useState(
    Array(pokeTypeFilters.length).fill(false)
  )
  console.log(toggledButtons)
  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value)
    setSearchTerm(event.target.value.toLowerCase())
  }

  const handleToggle = (index) => {
    const newToggledButtons = [...toggledButtons]
    newToggledButtons[index] = !newToggledButtons[index]
    setToggledButtons(newToggledButtons)
  }

  console.log()
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
      <div className='filterPokeType'>
        {pokeTypeFilters.map((item, index) => (
          <button
            className={`${item} ${toggledButtons[index] ? 'toggled' : ''}`}
            key={index}
            onClick={() => handleToggle(index)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Header
