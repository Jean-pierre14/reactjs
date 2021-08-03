import React from 'react'
import Events from './components/Events'
import Props from './components/Props'

class App extends React.Component {

  render() {

    return (
      <div>
        <h3>React VsLearn.IO</h3>
        <hr />
        <Props />
        <Events />
      </div>
    )
  }
}
export default App