import React, { Component } from 'react'

import './App.css'

import EnemyGen from './pages/EnemyGen/EnemyGen'
import Battle from './pages/Battle/Battle'
import Header from './pages/Header/Header'
import { Switch, Route } from 'react-router-dom'


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      
    }
  }
  render() {
    return (
      <div>
        <Header/>
        <Switch>

          <Route path='/enemyGen' component={EnemyGen}/>
          
          <Route path='/battle' component={Battle}/>
        </Switch>

      </div>
    );
  }
}

export default App;
