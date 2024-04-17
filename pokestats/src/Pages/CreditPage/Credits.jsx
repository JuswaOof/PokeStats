import React, { useRef, useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import '../CreditPage/credits.css'

function Credits() {
  const playerRef = useRef(null)
  const [playing, setPlaying] = useState(true)

  const handleEnded = () => {
    // Loop the video when it ends
    playerRef.current.seekTo(0)
    setPlaying(true)
  }

  useEffect(() => {
    setPlaying(true) // Auto play when component mounts
  }, [])

  return (
    <>
      <button>
        <a href='/'>go to home</a>
      </button>
      <div className='creditContainer'>
        <div className='rolling-credits pixelFont'>
          <div className='credit'>
            <h2>Created By</h2>
            <p>
              <a
                href='https://juswaoof.github.io/Portfolio-2022/'
                target='_blank'
              >
                {' '}
                Joshua Salcedo
              </a>
            </p>
          </div>
          <div className='credit'>
            <h2>Powered By</h2>
            <p>
              <a href='https://pokeapi.co/' target='_blank'>
                {' '}
                PokéAPI
              </a>
            </p>
          </div>
          <div className='credit'>
            <h2>Copyright</h2>
            <p>
              <a href='' target='_blank'>
                Pokémon Company
              </a>
            </p>
            <p>
              <a href='https://www.nintendo.com/us/' target='_blank'>
                Nintendo
              </a>
            </p>
            <p>
              <a href='https://www.creatures.co.jp/en/company/' target='_blank'>
                Creatures Inc.
              </a>
            </p>
            <p>
              <a href='https://www.gamefreak.co.jp/' target='_blank'>
                GAME FREAK inc.
              </a>
            </p>
          </div>
          <div className='credit'>
            <h2>Images Used</h2>
            <p>
              <a
                href='https://www.freepik.com/free-vector/gradient-zoom-effect-blue-background_32841000.htm'
                target='_blank'
              >
                Background Image
              </a>
            </p>
            <p>
              <a
                href='https://toppng.com/free-image/pokeball-PNG-free-PNG-Images_26934'
                target='_blank'
              >
                {' '}
                PokeBall
              </a>
            </p>
            <p>
              <a
                href='https://www.flaticon.com/free-icons/cat'
                title='cat icons'
                target='_blank'
              >
                {' '}
                Github Logo
              </a>
            </p>
            <p>
              <a
                href='https://www.flaticon.com/free-icons/dribbble'
                title='dribbble icons'
                target='_blank'
              >
                {' '}
                Dribbble Logo
              </a>
            </p>
          </div>
          <div className='credit'>
            <h2>Music</h2>
            <p>
              <a
                href='https://www.youtube.com/watch?v=2okF5QdKmco'
                target='_blank'
              >
                {' '}
                Pokémon Theme Song (COVER by Alec Chambers)
              </a>
            </p>
            <p>
              <a
                href='https://www.youtube.com/watch?v=YMEblRM4pGc&t=471s'
                target='_blank'
              >
                {' '}
                Chill & Relaxing Pokémon Music Mix
              </a>
            </p>
          </div>
          <div className='credit'>
            <h2>Special Thanks</h2>
            <p>
              <a href='/'>Camille Navarro</a>
            </p>
          </div>
        </div>
      </div>

      <ReactPlayer
        ref={playerRef}
        url='https://www.youtube.com/watch?v=2okF5QdKmco'
        playing={playing}
        controls={false}
        width='0px'
        height='0px'
        onEnded={handleEnded}
      />
    </>
  )
}

export default Credits