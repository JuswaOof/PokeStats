import pokeball from '../assets/pokeball.png'
import '../PokeCardComponent/pokeCard.css'
import React,{useState} from 'react'

function PokeCard({ pokeCard, openPokeInfo }) {
  const [imagesLoaded, setImagesLoaded] = useState(false)

  const handleImageLoad = (id) => {
    setImagesLoaded((prev) => ({
      ...prev,
      [id]: true,
    }))
  }

  return (
    <>
      {pokeCard.map((item) => (
        <div
          onClick={() => openPokeInfo(item)}
          className='cardContainer'
          key={item.id}
        >
          <span className='pokeId'>{item.id}</span>
          <div className='cardContentContainer'>
            {!imagesLoaded[item.id] && (
              <img className='cardImgLoader'
                src={pokeball}
                alt='Loading...'
                style={{ width: '50px', height: '50px' }}
              />
            )}
            <img
              className=''
              src={
                item.sprites.other.dream_world.front_default
                  ? item.sprites.other.dream_world.front_default
                  : item.sprites.other.home.front_default
                  ? item.sprites.other.home.front_default
                  : pokeball
              }
              alt={`picture of ${item.name}`}
              onLoad={() => handleImageLoad(item.id)}
              style={{ display: imagesLoaded[item.id] ? 'block' : 'none' }}
            />
            <div className='cardInfoContainer'>
              <span className='cardPokeName'>{item.name}</span>
              <div className='cardTypeContainer'>
                {item.types.map((pokeType, index) => (
                  <span className={pokeType.type.name} key={index}>
                    {pokeType.type.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default PokeCard