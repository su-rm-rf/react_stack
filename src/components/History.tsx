import React, { Component } from 'react'

function setAge(Target: Function) {
  Target.prototype.age = 34
}

@setAge
export default class History extends Component {
  age?: number

  componentDidMount() {
    
  }
  render() {
    return (
      <div className="history">
        History Page... { this.age }
      </div>
    )
  }
}