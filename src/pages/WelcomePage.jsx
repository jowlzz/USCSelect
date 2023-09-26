import { useState } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import '../App.css'
import {Link as ReactRouterLink } from 'react-router-dom'

function WelcomePg() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div className='logoSpace'>
        <center>
         <img src="./images/uscLogo.png" /> 
            <h5>Are you ready to vote?</h5>
            <button>
                  <Link
                    as={ReactRouterLink}
                    to="/login"
                    style={{
                      textDecoration: 'none',
                    }}
                    className="vote-link"
                  >
                    Vote Now!
                  </Link>
            </button>


        </center>
            
          
        </div>
    </>
  )
}

export default WelcomePg
