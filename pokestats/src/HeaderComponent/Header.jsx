import React, { useState, useEffect } from 'react'
import '../App.jsx'
import '../HeaderComponent/header.css'
import dribbbleLogo from '../assets/dribbble.png'
import githubLogo from '../assets/github.png'

function Header({ setSearchTerm }) {
  const [searchValue, setSearchValue] = useState('') 
  const [isScrolled, setIsScrolled] = useState(false)

  
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
    Array(pokeTypeFilters.length).fill(true)
  )
  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value)
    setSearchTerm(event.target.value.toLowerCase())
  }

  const handleToggle = (index) => {
    const newToggledButtons = [...toggledButtons]
    newToggledButtons[index] = !newToggledButtons[index]
    setToggledButtons(newToggledButtons)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop

      if (scrollTop >= 500 && !isScrolled) {
        setIsScrolled(true)
      } else if (scrollTop < 1) {
        setIsScrolled(false)
      }
    }

    // Set initial scroll state
    handleScroll()
    

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  return (
    <div className={`${isScrolled ? 'scrolledHeader' : 'header'}`}>
      <div className={`logo ${isScrolled ? 'hidden' : ''}`}>
        <img className='logoSocial' src={githubLogo} alt='' />
        <img className='logoSocial' src={dribbbleLogo} alt='' />
        <span>Oof</span>
      </div>
      <div className={`title ${isScrolled ? 'hidden' : ''}`}>PokéData</div>
      <div className={`credits ${isScrolled ? 'hidden' : ''}`}>
        <span>Credits</span>
      </div>
      <div className={` ${isScrolled ? 'scrolledSearchBar' : 'searchBar'}`}>
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
