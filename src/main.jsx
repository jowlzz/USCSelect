import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import LoginPage from './pages/Login.jsx'
import RegisterAccountCandidateAgreement from './pages/RegistrationPageCandidateAgreement.jsx'
import RegisterAccountVoter from './pages/RegistrationPageVoter.jsx'
import RegisterAccountCandidate from './pages/RegistrationPageCandidate.jsx'
import WelcomePg from './pages/WelcomePage.jsx'

import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
  <App/>
    <BrowserRouter>
    <div>
    <Routes>
      <Route path = '/' element = {<WelcomePg />}/>
      <Route path = '/login' element = {<LoginPage />}/>
      <Route path = '/registerVoter' element = {<RegisterAccountVoter />}/>
      <Route path = '/registerCandidate' element = {<RegisterAccountCandidate />}/>
      <Route path = '/registerCandidateAgreement' element = {<RegisterAccountCandidateAgreement />}/>
      // ADD ADDITIONAL PATHS BELOW
    </Routes>
    </div>
    </BrowserRouter>
    
 </React.StrictMode>
 
)
