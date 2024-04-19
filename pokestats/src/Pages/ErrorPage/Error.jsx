import React from "react";
import '../ErrorPage/error.css'
import TeamRocket from '../../assets/teamRocket.png'

function Error(){
return (
  <>
    <div className='errorContainer'>
      <p>
        Oh no! It looks like Team Rocket blasted this page off into cyberspace!
      </p>
      <span>Error 404: Page Not Found</span>
      <img src={TeamRocket} alt='image of TeamRocket' />
      <div className='goHomeButton'>
          <a href='/'>Go back</a>
      </div>
    </div>
  </>
)
}

export default Error