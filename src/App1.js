import React from 'react'
import Dashboard from './components/Dashboard/dashboard'

export default class App1 extends React.Component {
  constructor (props) {
    super(props)
    //   this.updateCounter = this.updateCounter.bind(this)
    this.state = {
      counterValue: 0,
      name: null
    }
  }
  counter = 0
  updateCounter = () => {
    this.counter++
    // console.log('counter', this.counter)
    this.setState({ counterValue: this.counter })
  }
  //   updateCounter () {
  //     this.counter++
  //   }
  handleChange = event => {
    this.setState({ name: event.target.value })
    console.log('name: ', this.state.name)
  }
  render () {
    return (
      <div>
        Hello App.
        <button onClick={this.updateCounter}>Click</button>
        {/* <p>Counter = {this.state.counterValue}</p> */}
        <input type='text' onChange={this.handleChange} />
        <Dashboard value={this.state.counterValue} />
      </div>
    )
  }
}
