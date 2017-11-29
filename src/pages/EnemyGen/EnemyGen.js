import React, { Component } from 'react';
import Dice from './Dice'
class EnemyGen extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  printstuff(event){
    console.log("test", event.target.value)
  }

  render() {
    
   	return (
	  <div className="EnemyGen">
      <h1>EnmyGen Page!!!</h1>
       <Dice/>
       
     </div>
   );
 }
}
export default EnemyGen;