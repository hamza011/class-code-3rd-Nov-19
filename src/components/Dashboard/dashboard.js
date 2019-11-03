import React from 'react'

class Dashboard extends React.Component {
  constructor (props) {
    super(props)
    console.log(this.props)
  }

  render () {
    return <div>Dashboard Component. {this.props.value}</div>
  }
}
export default Dashboard
