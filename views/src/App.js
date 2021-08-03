import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isStatus: true
    }
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

      </div>
    )
  }
}
export default App