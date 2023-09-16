import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='logoSpace'>
        <center><img src="./images/uscLogo.png" />
                <h5>Are you ready to vote?</h5>

                <button>VOTE NOW!</button>

        </center>
            
          
        </div>
    </>
  )
}

export default App
