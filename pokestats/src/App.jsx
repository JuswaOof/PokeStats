


import React, { useState, useEffect } from 'react'
import PokeCard from './PokeCardComponent/PokeCard.jsx'
import Header from './HeaderComponent/Header.jsx'
import axios from 'axios'
import pokeball from './assets/pokeball.png'

function App() {
  const limit = 100;
  const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon?limit=${limit}}`)
  const [pokeData, setPokeData] = useState([])
  const [pokeDataAll, setPokeDataAll] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const loadMore = () => {
    if (!isLoading && url) {
      setIsLoading(true)
      setTimeout(() => {
        axios.get(url).then((res) => {
          getPokemon(res.data.results)
          setUrl(res.data.next)
          setIsLoading(false)
          let noLimit = res.data.count;
          // Fetch all data without limit
          axios
            .get(`https://pokeapi.co/api/v2/pokemon?limit=${noLimit}`)
            .then((res) => {
              getPokemonAll(res.data.results)
              // console.log(pokeDataAll);
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

console.log(pokeDataAll)
console.log(pokeData)

  return (
    <>
      <Header/>
      <div className='appContent'>
        <PokeCard pokeCard={pokeData} />
        <div className='cardLoader'>
          {isLoading && <img src={pokeball}></img>}
        </div>
      </div>
    </>
  )
}

export default App
