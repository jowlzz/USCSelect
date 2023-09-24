import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import LoginPage from './pages/Login.jsx'
import RegisterAccount from './pages/Registration.jsx'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
  <App/>
    <BrowserRouter>
    <div>
    <Routes>
      <Route path = '/login' element = {<LoginPage />}/>
      <Route path = '/register' element = {<RegisterAccount />}/>
      // ADD ADDITIONAL PATHS BELOW
    </Routes>
    </div>
    </BrowserRouter>
    
 </React.StrictMode>
 
)
