import '../PokeInfoComponent/pokeInfo.css'

function PokeInfo({ pokeInfo, onClose }) {
  return (
    <div className='pokeInfoContainer'>
      <div className='pokeInfo'>
        <span className='close' onClick={onClose}>
          &times;
        </span>
        <h2>{pokeInfo.name}</h2>
        <img
          className=''
          src={
            pokeInfo.sprites.other.dream_world.front_default
              ? pokeInfo.sprites.other.dream_world.front_default
              : pokeInfo.sprites.other.home.front_default
          }
          alt={`picture of ${pokeInfo.name}`}
        />
      </div>
    </div>
  )
}

export default PokeInfo