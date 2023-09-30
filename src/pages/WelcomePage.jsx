import { useState } from 'react'
import '../App.css'
import welcomeBG from '../assets/backgrounds/Welcome Page.png'

function WelcomePg() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='welcomePageMain'>
        
        <div className='logoSpace'>
          <center>
            <img src="./images/uscLogo.png" />
            <h5>Are you ready to vote?</h5>
            <button>VOTE NOW</button>
          </center>

        </div>
        <img src={welcomeBG} alt="Welcome Background" />
        </div>
    </>
  )
}

export default WelcomePg
