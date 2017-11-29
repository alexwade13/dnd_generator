import React, { Component } from 'react';

import '../../App.css';

import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class Chart extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  render () {
    var {data} = this.props
    

    data = Object.keys(data).map(function(key) {
      return data[key]
      
    });

    return (
      <LineChart width={600} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="value" stroke="#82ca9d" />
      </LineChart>
    );
  }
}


export default Chart;