import React, { Component } from 'react';

import '../../App.css';
import DragSortableList from 'react-drag-sortable'



class Battle extends Component {

  constructor(props){
    super(props)
    this.state = {
      units:[],
      unitsnumber:0
    }
  }
  addValue(){
    var x = this.renderUnit(this.state.units.length)
    var array = this.state.units
    array.push(x)
    // array.sort((a,b)=>{
      
    // })
    console.log(array)
    this.setState({units:array})
  }

  printstuff(event){
    console.log("test", event.target.value)
  }

  renderUnit(key){
    return({content:(
      <div className="unit" key={key}>
        <form onSubmit={this.printstuff}> 
          <input type="text" onChange={this.printstuff}></input>
          <input type="number" className="health"></input>
          <input type="number" onChange={this.printstuff} className="init"></input>

        </form>
       
      </div>
    )})
  }

  render() {
    var t = this.state.units
    return (
      <div className="App">
        
        
        <button onClick={this.addValue.bind(this)}>add</button>          
        <DragSortableList items={t} onSort={this.printstuff.bind(this)}/>
      </div>
    );
  }
}

export default Battle;
