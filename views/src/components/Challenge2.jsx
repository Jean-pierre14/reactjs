import React, { Component } from "react"

class ChallengeTwo extends Component {
    constructor() {
        super()
        this.state = {
            isStatus: ''
        }
    }
    render() {
        let sta = ''
        if (this.state.isStatus) {
            sta = 'check'
        } else {
            sta = 'not-checked'
        }
        return (
            <div>
                <h3>This user {sta}</h3>
            </div>
        )
    }
}
export default ChallengeTwo