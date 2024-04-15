import React, { useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import '../MusicPlayerComponent/musicPlayer.css'

const MusicPlayer = () => {
  const playerRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const handleTogglePlay = () => {
    setPlaying((prevPlaying) => !prevPlaying)
  }

  const handleEnded = () => {
    // Loop the video when it ends
    playerRef.current.seekTo(0)
    setPlaying(true)
  }

  return (
    <div>
      <ReactPlayer
        ref={playerRef}
        url='https://www.youtube.com/watch?v=YMEblRM4pGc'
        playing={playing}
        controls={false}
        width='0px'
        height='0px'
        onEnded={handleEnded}
      />

      <div
        className={`musicPlayerButton button ${playing ? 'active' : ''}`}
        onClick={handleTogglePlay}
      >
        <div className='backGround' x='0' y='0' width='200' height='200'></div>
        <div className='icon' width='200' height='200'>
          <div
            className='part left'
            x='0'
            y='0'
            width='200'
            height='200'
            fill='#fff'
          ></div>
          <div
            className='part right'
            x='0'
            y='0'
            width='200'
            height='200'
            fill='#fff'
          ></div>
        </div>
        <div className='pointer'></div>
      </div>
    </div>
  )
}

export default MusicPlayer
