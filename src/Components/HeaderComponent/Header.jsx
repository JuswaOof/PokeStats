import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import '../../App.jsx'
import './header.css'
import dribbbleLogo from '../../assets/dribbble.png'
import githubLogo from '../../assets/github.png'
import pokeStatsLogo from '../../assets/PokestatsLogo.png'

function Header({ setSearchTerm, setTypeFilters}) {
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
  const [toggledButtons, setToggledButtons] = useState([])

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value)
    setSearchTerm(event.target.value.toLowerCase())
  }

  const handleToggle = (item) => {
    const index = toggledButtons.indexOf(item)
    let newToggledButtons
    if (index === -1) {
      // If the item is not in the array, add it
      newToggledButtons = [...toggledButtons, item]
    } else {
      // If the item is already in the array, remove it
      newToggledButtons = toggledButtons.filter((_, i) => i !== index)
    }
    setToggledButtons(newToggledButtons)

    // Set the type filters
    setTypeFilters(newToggledButtons)

    console.log(newToggledButtons)
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
      <div className={`title ${isScrolled ? 'hidden' : ''}`}><img src={pokeStatsLogo} alt="PokeStats Logo" /></div>
      <div className={`credits ${isScrolled ? 'hidden' : ''}`}>
        <Link to='Credits'>
          <span>Credits</span>
        </Link>
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
