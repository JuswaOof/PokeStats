import pokeball from './assets/pokeball.png'

function PokeCard({ pokeCard, loading }) {
  // console.log(pokeCard);
  return (
    <>
      {loading ? (
        ''
      ) : (
        pokeCard.map((item) => (
          <div className='cardContainer'>
            <span>{item.id}</span>
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
                alt='A picture of a pokemon'
              />
              <div className='cardInfoContainer'>
                <span className='cardPokeName'>{item.name}</span>
                <div className='cardAttackContainer'>
                  {item.types.map((pokeType) => (
                    <span
                      className={pokeType.type.name}
                    >
                      {pokeType.type.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  )
}

export default PokeCard
