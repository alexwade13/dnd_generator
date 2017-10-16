import React, { Component } from 'react';

class Dice extends Component {
  constructor(props){
    super(props)
    this.state = {
        sides:0,
        number:0,
        rolled:0
    }
  }

  printstuff(event){
    console.log("test", event.target.value)
  }

  setSides(event){
    this.setState({sides:event.target.value})
    
  }

  setNumber(event){
    this.setState({number:event.target.value})
  }

  roll(){
    var {sides, number} = this.state
    var rolled = 0
    for(var i=0; i < number; i++) {
        rolled += Math.floor(Math.random()*sides) + 1
    }
    this.setState({rolled:rolled})
  }

  render() {
    var {sides, number,rolled} = this.state
    
    
    console.log(sides, number)
    return (
      <div className="EnemyGen">
       
       <input type="number" onChange={this.setSides.bind(this)} value={sides}></input>
       <input type="number" onChange={this.setNumber.bind(this)} value={number}></input>
       <span>{rolled}</span>
       <button onClick={this.roll.bind(this)}>ROLL IT</button>
     </div>
   );
 }
}
export default Dice;