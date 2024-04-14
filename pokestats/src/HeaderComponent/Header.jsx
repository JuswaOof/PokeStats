import React, { useState, useEffect } from 'react'
import '../App.jsx'
import '../HeaderComponent/header.css'
import dribbbleLogo from '../assets/dribbble.png'
import githubLogo from '../assets/github.png'

function Header({ setSearchTerm, setTypeFilters }) {
  const [searchValue, setSearchValue] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)
  const [pokeTypeFilters, setPokeTypeFilters] = useState([
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
  ])
  const [toggledButtons, setToggledButtons] = useState([])

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value)
    setSearchTerm(event.target.value.toLowerCase())
  }

  const handleToggle = (item) => {
    let newToggledButtons
    if (!toggledButtons.includes(item)) {
      newToggledButtons = [...toggledButtons, item]
    } else {
      newToggledButtons = toggledButtons.filter((type) => type !== item)
    }
    setToggledButtons(newToggledButtons)
  }

  useEffect(() => {
    setTypeFilters(toggledButtons)
  }, [toggledButtons, setTypeFilters])

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
        <a href='https://github.com/JuswaOof' target='_blank' rel='noopener'>
          <img className='logoSocial' src={githubLogo} alt='' />
        </a>
        <a href='https://dribbble.com/Juswa_oof' target='_blank' rel='noopener'>
          <img className='logoSocial' src={dribbbleLogo} alt='' />
        </a>
        <a
          href='https://juswaoof.github.io/Portfolio-2022/'
          target='_blank'
          rel='noopener'
        >
          <span>Oof</span>
        </a>
      </div>
      <div className={`title ${isScrolled ? 'hidden' : ''}`}>PokéData</div>
      <div className={`credits ${isScrolled ? 'hidden' : ''}`}>
        <a href='#'>
          <span>Credits</span>
        </a>
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
            className={`${item} ${
              toggledButtons.includes(item) ? 'toggled' : ''
            }`}
            key={index}
            onClick={() => handleToggle(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Header
