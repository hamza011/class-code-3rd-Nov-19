import React from 'react'
export default class List extends React.Component {
  constructor (props) {
    super(props)
  }
  delete = index => {
    // console.log("index" , index);
    this.props.onDelete(index)
  }
  edit = index => {
    this.props.onEdit(index)
  }
  inputRefs = []

  setRefs = ref => {
    this.inputRefs.push(ref)
  }
  render () {
    console.log(this.inputRefs)
    return (
      <div>
        <ul>
          {this.props.items.map((task, index) => (
            <li key={index} ref={this.setRefs}>
              {task} 
              <button onClick={() => this.edit(index)}> Edit </button>
              <button onClick={() => this.delete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
