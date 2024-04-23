import React from 'react'
import '../ErrorPage/error.css'
import TeamRocket from '../../assets/teamRocket.png'

function Error() {
  console.log('test')
  return (
    <>
      <div className='errorContainer'>
        <p className='pixelify textAlignCenter'>
          Oh no! It looks like Team Rocket blasted this page off into
          cyberspace!
        </p>
        <span className='pixelify textAlignCenter'>Error 404: Page Not Found</span>
        <img src={TeamRocket} alt='image of TeamRocket' />
        <a href='/'>
          <div className='goHomeButton pixelify textAlignCenter'>Go back</div>
        </a>
      </div>
    </>
  )
}

export default Error
