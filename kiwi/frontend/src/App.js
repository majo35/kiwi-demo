import React, { Component } from 'react';
import './App.css';
import PhoneInput from './Phone/PhoneInput'
import PhoneKeyBoard from './Phone/PhoneKeyBoard'
import axios from 'axios'

class App extends Component {

  state = {
    number: '23',
    result: []
  }

  numberChangedHandler = (event) => {
    this.setState({
      number: event.target.value
    })
  }

  numberChangedKeyHandler = (value) => {
    const newValue = this.state.number + value
    this.setState({
      number: newValue
    })
  }

  translate = () => {
    let number = this.state.number
    axios.get(`http://localhost:4000/?number=${number}`)
      .then(response => { 
        console.log('data: ', response.data)
        this.setState({result: response.data})
      })
      .catch(e => console.error(e))
  }

  render() {
    
    const items = this.state.result.map((item, index) => { return <div key={index}>{item}</div>})
    
    
    return (
      <div className="App">
        <h1>Kiwi T9 demo</h1>
        <PhoneInput number={this.state.number} changed={this.numberChangedHandler}/>
        <PhoneKeyBoard changed={this.numberChangedKeyHandler}/>
        <button onClick={this.translate}>Translate</button>
        <div className="App_result"><h3>Options:</h3>{items}</div> 
      </div>
    )
  }
}

export default App;
