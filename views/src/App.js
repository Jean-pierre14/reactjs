import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isStatus: true,
      count: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }
  render() {
    let text
    if (this.state.isStatus === true) {
      text = 'In'
    } else {
      text = 'Out'
    }
    return (
      <div>
        <h2>You currently Log {text}</h2>
        <p>{this.state.count}</p>
        <button onClick={this.handleClick}>Add count</button>
      </div>
    )
  }
}
export default App