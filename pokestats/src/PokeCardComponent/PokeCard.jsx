import pokeball from '../assets/pokeball.png'
import '../PokeCardComponent/pokeCard.css'

function PokeCard({ pokeCard, loading, openPokeInfo }) {
  // console.log(pokeCard);
  return (
    <>
      {loading
        ? ''
        : pokeCard.map((item) => (
            <div
              onClick={() => openPokeInfo(item)}
              className='cardContainer'
              key={item.id}
            >
              <span className='pokeId'>{item.id}</span>
              <div className='cardContentContainer'>
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
