import React, { useState, useEffect, useRef } from 'react'
import ReactPlayer from 'react-player'
import '../MenuButtonsComponent/menuButton.css'
import arrowUp from '../../assets/up-arrow.png'
import playButton from '../../assets/playButton.png'
import pauseButton from '../../assets/pauseButton.png'

function MenuButton() {
  // start of music component
  const playerRef = useRef(null)
  const [playing, setPlaying] = useState(true)

  const handleTogglePlay = () => {
    setPlaying((prevPlaying) => !prevPlaying)
  }

  const handleEnded = () => {
    // Loop the video when it ends
    playerRef.current.seekTo(0)
    setPlaying(true)
  }
  useEffect(() => {
    setPlaying(true) // Auto play when component mounts
  }, [])

  // start of scroll to top button
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop

      if (scrollTop >= 500 && !isScrolled) {
        setIsScrolled(true)
      } else if (scrollTop < 1) {
        setIsScrolled(false)
      }
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isScrolled])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  // end of scroll to top button
  return (
    <>
      {/* start of scroll to top */}
      <div className='menuButtonContainer'>
        {isScrolled && (
          <div className='button scrollToTop' onClick={scrollToTop}>
            <img src={arrowUp} alt='arrow-up img' />
          </div>
        )}

        <div
          className={`button musicPlayer ${playing ? 'active' : ''}`}
          onClick={handleTogglePlay}
        >
          <img src={playing ? pauseButton : playButton} alt='play/pause button img' />
        </div>
      </div>

      <ReactPlayer
        ref={playerRef}
        url='https://www.youtube.com/watch?v=YMEblRM4pGc'
        playing={playing}
        controls={false}
        width='0px'
        height='0px'
        onEnded={handleEnded}
      />
    </>
  )
}

export default MenuButton
