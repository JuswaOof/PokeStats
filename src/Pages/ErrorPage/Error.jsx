import React from 'react'
import {Link} from 'react-router-dom'
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
        <Link to='/PokeStats/'>
        <div className='goHomeButton pixelify textAlignCenter'>Go back</div>
        </Link>
          
      </div>
    </>
  )
}

export default Error
