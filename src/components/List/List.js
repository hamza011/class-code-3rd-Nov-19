import React from 'react'
export default class List extends React.Component {
    constructor(props) {
        super(props);
    }
  render () {
    return (
      <div>
          <ul>
              { this.props.items.map((task, index) => <li key={index}>{task} <button>Delete</button></li>) }
          </ul>
      </div>
    )
  }
}
