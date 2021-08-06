import React from "react"

class Challenge extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "Grace BISIMWA",
            age: 24
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h3>{this.state.age}</h3>
            </div>
        )
    }
}
export default Challenge