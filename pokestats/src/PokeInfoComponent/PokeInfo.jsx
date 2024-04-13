import '../PokeInfoComponent/pokeInfo.css'

function PokeInfo({ pokeInfo, onClose }) {
  return (
    <div className='pokeInfoContainer'>
      <span className='close' onClick={onClose}>
        &times;
      </span>
      <div className='pokeInfo'>
        <div className='leftInfo flexColumn flex'>
          <span className='tekoFont whiteText textOutline spanPad'>
            HP {pokeInfo.stats[0].base_stat}
          </span>
          <div className='barContainerLeft'>
            <div
              className='bar'
              style={{ width: `${(pokeInfo.stats[0].base_stat / 200) * 100}%` }}
            ></div>
          </div>
          <span className='tekoFont whiteText textOutline spanPad'>
            Attack {pokeInfo.stats[1].base_stat}
          </span>
          <div className='barContainerLeft'>
            <div
              className='bar'
              style={{ width: `${(pokeInfo.stats[1].base_stat / 200) * 100}%` }}
            ></div>
          </div>
          <span className='tekoFont whiteText textOutline spanPad'>
            Defense {pokeInfo.stats[2].base_stat}
          </span>
          <div className='barContainerLeft'>
            <div
              className='bar'
              style={{ width: `${(pokeInfo.stats[2].base_stat / 200) * 100}%` }}
            ></div>
          </div>
          <span className='tekoFont whiteText textOutline spanPad'>
            Height: {pokeInfo.height / 10} m
          </span>
        </div>
        <div className='midInfo flexColumn flex'>
          <img
            src={
              pokeInfo.sprites.other.dream_world.front_default
                ? pokeInfo.sprites.other.dream_world.front_default
                : pokeInfo.sprites.other.home.front_default
            }
            alt={`picture of ${pokeInfo.name}`}
          />
          <h2 className='tekoFont whiteText textOutline spanPad'>
            {pokeInfo.name.charAt(0).toUpperCase() + pokeInfo.name.slice(1)}
          </h2>
        </div>
        <div className='rightInfo flexColumn flex'>
          <span className='tekoFont whiteText textOutline spanPad'>
            SP Attack
          </span>
          <div
            className='bar'
            style={{ width: `${(pokeInfo.stats[3].base_stat / 200) * 100}%` }}
          ></div>
          <span className='tekoFont whiteText textOutline spanPad'>
            SP Defense
          </span>
          <div
            className='bar'
            style={{ width: `${(pokeInfo.stats[4].base_stat / 200) * 100}%` }}
          ></div>
          <span className='tekoFont whiteText textOutline spanPad'>
            Speed {pokeInfo.stats[5].base_stat}
          </span>
          <div className='barContainer'>
            <div
              className='bar'
              style={{ width: `${(pokeInfo.stats[5].base_stat / 200) * 100}%` }}
            ></div>
          </div>
          <span className='tekoFont whiteText textOutline spanPad'>
            Weight: {pokeInfo.weight / 10} Kg
          </span>
        </div>
      </div>
    </div>
  )
}

export default PokeInfo