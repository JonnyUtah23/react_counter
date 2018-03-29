import React, { Component } from 'react';

class Counter extends Component {
  state = { value: 0 }

  inc = () => {
    this.setState( (state) => {
      return { value: state.value + 1 }
    })
  }

  dec = () => {
    this.setState( (state) => {
      return { value: state.value - 1 }
    })
  }

  render() {
    return (
      <div style={{backgroundColor: this.props.name, color: 'white'}}>
        <p>{this.props.name}</p>
        <p>{this.state.value}</p>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
      </div>
    )
  }
}

export default Counter