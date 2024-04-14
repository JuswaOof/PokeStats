import React, { useState, useEffect } from 'react'
import PokeCard from './PokeCardComponent/PokeCard.jsx'
import Header from './HeaderComponent/Header.jsx'
import PokeInfo from './PokeInfoComponent/PokeInfo.jsx'
import MusicPlayer from './MusicPlayerComponent/MusicPlayerComponent.jsx'
import axios from 'axios'
import pokeball from './assets/pokeball.png'

function App() {
  const limit = 50
  const [url, setUrl] = useState(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
  )
  const [pokeData, setPokeData] = useState([])
  const [pokeDataAll, setPokeDataAll] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [pokeInfo, setPokeInfo] = useState(null)
  const [typeFilters, setTypeFilters] = useState([])

  const loadMore = () => {
    if (!isLoading && url) {
      setIsLoading(true)
      setTimeout(() => {
        axios.get(url).then((res) => {
          getPokemon(res.data.results)
          setUrl(res.data.next)
          setIsLoading(false)
        })
      }, 1000)
    }
  }

  const fetchAllPokemon = () => {
    if (!isLoading && url) {
      setIsLoading(true)
      setTimeout(() => {
        axios.get(url).then((res) => {
          setIsLoading(false)
          let noLimit = res.data.count
          axios
            .get(`https://pokeapi.co/api/v2/pokemon?limit=${noLimit}`)
            .then((res) => {
              getPokemonAll(res.data.results)
            })
        })
      }, 500)
    }
  }

  const getPokemon = (results) => {
    let promises = results.map((item) => axios.get(item.url))
    Promise.all(promises).then((responses) => {
      let newData = responses.map((response) => response.data)
      setPokeData((prevData) => [...prevData, ...newData])
    })
  }

  const getPokemonAll = (results) => {
    let promises = results.map((item) => axios.get(item.url))
    Promise.all(promises).then((responses) => {
      let newData = responses.map((response) => response.data)
      setPokeDataAll((prevData) => [...prevData, ...newData])
    })
  }

  useEffect(() => {
    loadMore()
    fetchAllPokemon()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        loadMore()
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [url])

const filteredPokeData = pokeDataAll.filter((pokemon) => {
  const hasSelectedTypes =
    typeFilters.length === 0 ||
    typeFilters.every((selectedType) =>
      pokemon.types.some((type) => type.type.name === selectedType)
    )
  const matchesSearch = searchTerm
    ? pokemon.name.toLowerCase().includes(searchTerm)
    : true
  return hasSelectedTypes && matchesSearch
})

  const openPokeInfo = (pokeInfo) => {
    setPokeInfo(pokeInfo)
  }

  const closePokeInfo = () => {
    setPokeInfo(null)
  }

  return (
    <>
      <MusicPlayer></MusicPlayer>
      {pokeInfo && <PokeInfo pokeInfo={pokeInfo} onClose={closePokeInfo} />}
      <Header setSearchTerm={setSearchTerm} setTypeFilters={setTypeFilters} />
      <div className='appContent'>
        <PokeCard pokeCard={filteredPokeData} openPokeInfo={openPokeInfo} />
        <div className='cardLoader'>
          {isLoading && <img src={pokeball} alt='loading' />}
        </div>
      </div>
    </>
  )
}

export default App
