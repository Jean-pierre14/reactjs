import React from 'react'
import Events from './components/Events'
import Props from './components/Props'
import Form from './components/Form'
import './index.css'
import Challenge from './components/Challenge'
import ChallengeTwo from './components/Challenge2'

class App extends React.Component {

  render() {

    return (
      <div>
        <div className="box-header">
          <h3>React VsLearn.IO</h3>
          <div className="form">
            <h2>Data from an API</h2>
          </div>
        </div>
        <Challenge />
        <ChallengeTwo />
        <Props />
        <Events />
        <Form />
        <div className="container">
          <div className="form">
            <h3>Data </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut provident dignissimos facilis tenetur nostrum aliquid, dolor eos cum est? Iste sint ad necessitatibus veritatis excepturi magnam voluptate, sequi, voluptas ut reiciendis pariatur eius voluptatibus minima natus explicabo facilis nulla commodi repellat repudiandae nam obcaecati ex neque nemo quasi. Consequatur, numquam.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
export default App