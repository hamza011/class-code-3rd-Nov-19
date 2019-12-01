import React from 'react'

import List from './../List/List'
export default class Todo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentValue: '',
      tasks: [],
      notEditMode: true
    }
    // console.log("constructor executes");
  }
  
//   componentWillMount () {
//     console.log('ComponentWillMount executes')
//   }
//   componentDidMount () {
//     console.log('ComponentDidMount executes')
//   }
  
  inputRef = React.createRef()
  localIndex = undefined

  updateCurrentTask = event => {
    const value = event.target.value
    console.log(value)
    this.setState({ currentValue: value })
  }

  addTask = e => {
    e.preventDefault()
    console.log(this.inputRef)
    this.setState({ task: this.state.currentValue })
    const addedTasks = this.state.tasks
    addedTasks.push(this.inputRef.current.value)
    this.setState({ tasks: addedTasks })
    this.inputRef.current.value = ''
  }
  onDeleteClick = index => {
    const addedTask = this.state.tasks
    addedTask.splice(index, 1)
    this.setState({ tasks: addedTask })
  }
  onEditTask = index => {
    this.localIndex = index
    this.setState({ notEditMode: false })
    const addedTask = this.state.tasks
    this.inputRef.current.value = addedTask[index]
    this.setState({ tasks: addedTask })
  }
  cancelUpdate = () => {
    this.setState({ notEditMode: true })
    this.inputRef.current.value = ''
  }
  handleUpdate = ev => {
    ev.preventDefault()
    const existedTasks = this.state.tasks
    existedTasks[this.localIndex] = this.inputRef.current.value
    this.setState({ tasks: existedTasks, notEditMode: true })
    this.inputRef.current.value = ''
  }

  render () {
    return (
      <div>
        <form>
          <input type='text' ref={this.inputRef} />
          {this.state.notEditMode ? (
            <button onClick={this.addTask}>Add</button>
          ) : (
            <span>
              <button onClick={this.handleUpdate}>Update</button>
              <button onClick={this.cancelUpdate}>Cancel</button>
            </span>
          )}
        </form>
        <List
          items={this.state.tasks}
          onDelete={this.onDeleteClick}
          onEdit={this.onEditTask}
        />
      </div>
    )
  }
}
