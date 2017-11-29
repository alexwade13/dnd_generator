import React, { Component } from 'react';
import Chart from './Chart'

class Dice extends Component {
  constructor(props){
    super(props)
    this.state = {
        sides:0,
        number:0,
        rolled:0,
        outcomes:{}
    }
  }

  printstuff(event){
    console.log("test", event.target.value)
  }

  setSides(event){
    this.setState({sides:event.target.value, outcomes:{}})
    
  }

  setNumber(event){
    this.setState({number:event.target.value,outcomes:{}})
  }

  roll(){
    var {sides, number,outcomes} = this.state
    var rolled = 0

    for(var i=0; i < number; i++) {
        rolled += Math.ceil(Math.random()*sides) 
    }

    outcomes[rolled] = outcomes[rolled] === undefined ? {name: rolled.toString(), value: 1} : {name: rolled.toString(), value: outcomes[rolled]["value"] + 1} 
    this.setState({rolled:rolled, outcomes:outcomes})
  }

  render() {
    var {sides, number, rolled, outcomes} = this.state
    
    
    console.log(sides, number)
    return (
      <div className="EnemyGen">
       
       <input type="number" onChange={this.setSides.bind(this)} value={sides}></input>
       <input type="number" onChange={this.setNumber.bind(this)} value={number}></input>
       <span>{rolled}</span>
       <button onClick={this.roll.bind(this)}>ROLL IT</button>
       <Chart data={outcomes}/>
     </div>
   );
 }
}
export default Dice;