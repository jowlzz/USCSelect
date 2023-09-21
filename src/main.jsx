import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router, Route} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <Router>
      <Route exact path = '/' component={App} />
      // ADD ADDITIONAL PATHS BELOW
    </Router>
  </div>
)
