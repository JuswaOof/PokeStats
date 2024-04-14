import '../PokeInfoComponent/pokeInfo.css'
import React, { useState, useEffect } from 'react'

function PokeInfo({ pokeInfo, onClose }) {
  const [barWidths, setBarWidths] = useState([0, 0, 0, 0, 0, 0])
  const [currentStats, setCurrentStats] = useState(
    pokeInfo.stats.map((stat) => 0)
  )
//I map base_stats data this is the sequence...
// barWidths[0] corresponds to the HP bar (pokeInfo.stats[0].base_stat)
// barWidths[1] corresponds to the Attack bar (pokeInfo.stats[1].base_stat)
// barWidths[2] corresponds to the Defense bar (pokeInfo.stats[2].base_stat)
// barWidths[3] corresponds to the Special Attack bar (pokeInfo.stats[3].base_stat)
// barWidths[4] corresponds to the Special Defense bar (pokeInfo.stats[4].base_stat)
// barWidths[5] corresponds to the Speed bar (pokeInfo.stats[5].base_stat)


useEffect(() => {
  const newWidths = pokeInfo.stats.map((stat) => (stat.base_stat / 200) * 100)
  setBarWidths(newWidths)

  const interval = setInterval(() => {
    const newStats = currentStats.map((stat, index) => {
      const trueValue = pokeInfo.stats[index].base_stat
      const increment = Math.ceil(trueValue / 100)
      return stat + increment <= trueValue ? stat + increment : trueValue
    })
    setCurrentStats(newStats)
  }, 10)

  return () => clearInterval(interval)
}, [pokeInfo.stats, currentStats])

  return (
    <div className='pokeInfoContainer'>
      <span className='close' onClick={onClose}>
        &times;
      </span>
      <div className='pokeInfo'>
        <div className='leftInfo flexColumn flex'>
          <span className='tekoFont whiteText textOutline spanPad'>
            HP: {currentStats[0]}
          </span>
          <div className='barContainerLeft'>
            <div
              className='bar hpBar'
              style={{ width: `${barWidths[0]}%` }}
            ></div>
          </div>
          <span className='tekoFont whiteText textOutline spanPad'>
            Attack: {currentStats[1]}
          </span>
          <div className='barContainerLeft'>
            <div
              className='bar atkBar'
              style={{ width: `${barWidths[1]}%` }}
            ></div>
          </div>
          <span className='tekoFont whiteText textOutline spanPad'>
            Defense: {currentStats[2]}
          </span>
          <div className='barContainerLeft'>
            <div
              className='bar defBar'
              style={{ width: `${barWidths[2]}%` }}
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
            SP Attack: {currentStats[3]}
          </span>
          <div
            className='bar spAtkBar'
            style={{ width: `${barWidths[3]/1.5}%` }}
          ></div>
          <span className='tekoFont whiteText textOutline spanPad'>
            SP Defense: {currentStats[4]}
          </span>
          <div
            className='bar spDefBar'
            style={{ width: `${barWidths[4]/1.5}%` }}
          ></div>
          <span className='tekoFont whiteText textOutline spanPad'>
            Speed: {currentStats[5]}
          </span>
          <div
            className='bar spdBar'
            style={{ width: `${barWidths[5]}%` }}
          ></div>
          <span className='tekoFont whiteText textOutline spanPad'>
            Weight: {pokeInfo.weight / 10} Kg
          </span>
        </div>
      </div>
    </div>
  )
}

export default PokeInfo