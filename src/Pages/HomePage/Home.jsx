import React, { useState, useEffect } from 'react'
import PokeCard from '../../Components/PokeCardComponent/PokeCard.jsx'
import Header from '../../Components/HeaderComponent/Header.jsx'
import PokeInfo from '../../Components/PokeInfoComponent/PokeInfo.jsx'
import axios from 'axios'
import pokeball from '../../assets/pokeball.png'
import MenuButton from '../../Components/MenuButtonsComponent/MenuButton.jsx'
import '../HomePage/home.css'


function App() {
  const limit = 50
  const [url, setUrl] = useState(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`
  )
  const [pokeData, setPokeData] = useState([])
  const [pokeDataAll, setPokeDataAll] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  // const [isWebsiteLoaded, setIsWebsiteLoaded] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [pokeInfo, setPokeInfo] = useState(null)
  const [typeFilters, setTypeFilters] = useState([])
  

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

  const loadMore = () => {
    if (!isLoading && url) {
      console.log('loadMore rendered')
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
            .get(`https://pokeapi.co/api/v2/pokemon?limit=${noLimit}&offset=0`)
            .then((res) => {
              getPokemonAll(res.data.results)
            })
        })
      }, 1000)
    }
  }

  useEffect(() => {
    loadMore()
    fetchAllPokemon()
  }, [])

  
  // useEffect(() => {
  //   const handleLoad = () => {
  //     setIsWebsiteLoaded(true);
  //   };
  
  //   window.addEventListener('load', handleLoad);
  
  //   return () => {
  //     window.removeEventListener('load', handleLoad);
  //   };
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
          document.documentElement.offsetHeight 
          // && isWebsiteLoaded
      ) {
        loadMore()
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [url])

  const filteredPokeData = pokeDataAll.filter((pokemon) => {
    const hasAllTypes =
      typeFilters.length === 0 ||
      typeFilters.every((filter) =>
        pokemon.types.some((type) => type.type.name === filter)
      )
    const matchesSearch = searchTerm
      ? pokemon.name.toLowerCase().includes(searchTerm)
      : true
    return hasAllTypes && matchesSearch
  })

  // console.log(typeFilters)

  const openPokeInfo = (pokeInfo) => {
    setPokeInfo(pokeInfo)
  }

  const closePokeInfo = () => {
    setPokeInfo(null)
  }

  // useEffect(() => {
  //   console.log('filteredPokeData:', filteredPokeData)
  // }, [filteredPokeData])


  return (
    <>
      {pokeInfo && <PokeInfo pokeInfo={pokeInfo} onClose={closePokeInfo} />}
      <Header setSearchTerm={setSearchTerm} setTypeFilters={setTypeFilters} />
      <div className='appContent'>
        <PokeCard
          pokeCard={
            searchTerm || typeFilters.length > 0 ? filteredPokeData : pokeData
          }
          openPokeInfo={openPokeInfo}
        />
        <div className='cardLoader'>
          {isLoading && <img src={pokeball} alt='loading' />}
        </div>
      </div>
    <MenuButton></MenuButton>
    </>
  )
}

export default App
