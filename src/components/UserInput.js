import React, { Component } from 'react'

export default class UserInput extends Component {
  render() {
    const {change}= this.props
    return (
      <div>
        <input type='text' onChange={change}></input>
      </div>
    )
  }
}


