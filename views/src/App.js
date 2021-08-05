import React from 'react'
import Events from './components/Events'
import Props from './components/Props'
import Form from './components/Form'
import './index.css'

class App extends React.Component {

  render() {

    return (
      <div>
        <div className="box-header">
          <h3>React VsLearn.IO</h3>
        </div>
        <hr />
        <Props />
        <Events />
        <Form />
      </div>
    )
  }
}
export default App