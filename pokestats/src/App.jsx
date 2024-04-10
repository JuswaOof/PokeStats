// import React, { useState, useEffect } from 'react'
// import PokeCard from './PokeCard.jsx'
// import axios from 'axios'

// function App() {
//   const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
//   const [nextUrl,setNextUrl] = useState();
//   // ?limit=1302
//   const [pokeData, setPokeData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const pokeGet = async () => {
//     setIsLoading(true);
//     const res = await axios.get(url);
//     // console.log(res.data.results)
//     getPokemon(res.data.results);
//     setIsLoading(false);
//     // console.log(pokeData);
//   }

//   const getPokemon = async (res) => {
//     res.map(async (item) => {
//       const result = await axios.get(item.url);
//       // console.log(result.data)
//       setPokeData(state=>{
//         state=[...state,result.data]
//         state.sort((a,b)=>a.id>b.id ? 1:-1)
//         return state;
//       })
//     })
//   }
  
//   useEffect(() => {
//     pokeGet()
//   }, [url])

//   return (
//     <>
//       <div className='appContent'>
//         <PokeCard pokeCard={pokeData} loading={isLoading}></PokeCard>
//       </div>
//     </>
//   )
// }

// export default App


import React, { useState, useEffect } from 'react'
import PokeCard from './PokeCard.jsx'
import axios from 'axios'
import pokeball from './assets/pokeball.png'

function App() {
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [pokeData, setPokeData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

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

  const getPokemon = (results) => {
    let promises = results.map((item) => axios.get(item.url))
    Promise.all(promises).then((responses) => {
      let newData = responses.map((response) => response.data)
      setPokeData((prevData) => [...prevData, ...newData])
    })
  }

  useEffect(() => {
    loadMore()
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  return (
    <div className='appContent'>
      <PokeCard pokeCard={pokeData} />
      <div className='cardLoader'>{isLoading &&  <img src={pokeball}></img>}</div>
    </div>
  )
}

export default App
