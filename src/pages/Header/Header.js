import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header className="App">
  	<div className="App-header">
      <h2>Welcome to React</h2>
          <nav >
      <ul>
        
        <li><Link to='/battle'>Battle</Link></li>
        <li><Link to='/enemyGen'>enemyGen</Link></li>
      </ul>
    </nav>

    </div>
  </header>
)

export default Header
