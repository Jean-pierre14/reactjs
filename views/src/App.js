import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: 'Grace',
      age: 24
    }
  }
  render() {
    return (
      <div>
        <h4>Class Component</h4>
        <h4>{this.state.name}</h4>
        <h1>{this.state.age} years old</h1>
      </div>
    )
  }
}
export default App