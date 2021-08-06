import React from 'react'

class Props extends React.Component {
    render() {
        return (
            <div className="box">
                <h3>Props part</h3>
                <Datas username="Grace bisimwa" />
                <Const />
            </div>
        )
    }
}

class Datas extends React.Component {
    render() {
        return (
            <div className="box-white">
                <h3>Welcome, </h3>
                <h1>{this.props.username}!</h1>
            </div>
        )
    }
}

class Const extends React.Component {
    constructor() {
        super()
        this.state = {
            response: 'Yes'
        }
    }
    render() {
        return (
            <div>
                <p>State response is {this.state.response}</p>
            </div>
        )
    }
}
export default Props