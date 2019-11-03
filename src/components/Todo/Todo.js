import React from 'react'

import List from './../List/List'
export default class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentValue: '',
            // task: '',
            tasks: []
        }
    }
    updateCurrentTask = (event) => {
        const value = event.target.value;
        console.log(value);
        this.setState({currentValue: value});
    }

    addTask = () => {
        // this.setState({task: this.state.currentValue});
        const addedTasks = this.state.tasks;
        console.log('before push: ', addedTasks)
        addedTasks.push(this.state.currentValue)
        console.log('after push: ', addedTasks)
        this.setState({tasks: addedTasks});
    }
  render () {
    return (
      <div>
          <form action="javascript:void(0)">
              <input type="text" onChange={this.updateCurrentTask}/>
              <button onClick={this.addTask}>Add</button>
          </form>
          {/* <p>{this.state.tasks}</p> */}
          {/* <ul>
              { this.state.tasks.map((task, index) => <li key={index}>{task}</li>) }
          </ul> */}
          <List items={this.state.tasks}/>
      </div>
    )
  }
}
