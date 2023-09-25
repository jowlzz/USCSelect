import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import LoginPage from './pages/Login.jsx'
import RegisterAccount from './pages/Registration.jsx'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import WelcomePg from './pages/WelcomePage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
  <App/>
    <BrowserRouter>
    <div>
    <Routes>
      <Route path = '/' element = {<WelcomePg />}/>
      <Route path = '/login' element = {<LoginPage />}/>
      <Route path = '/register' element = {<RegisterAccount />}/>
      // ADD ADDITIONAL PATHS BELOW
    </Routes>
    </div>
    </BrowserRouter>
    
 </React.StrictMode>
 
)
