import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css'

class Item extends Component {
  render () {
    return (
      <li>{this.props.itemValue}</li>
    )
  }
}

class App extends Component {
	state = {time: new Date().toString()}
	constructor(props){
		super(props)
		setInterval(()=>{
			this.setState({time: new Date().toString()})
			console.log('one more second')
		}, 1000)
	}
  render () {
    const list = ['one', 'two', 34]
    return (
      <div className="App">
        <div className="App-intro" style={{color: 'red'}}>
          Hello World<br/>
          <ol>
            {list.map((value, key) => <Item key={key} itemValue={value}/>) }
          </ol>
        </div>
		<div style={{color:'blue'}}>{this.state.time}</div>
      </div>
    );
  }
}

export default App;
