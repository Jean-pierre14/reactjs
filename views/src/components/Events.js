import React from "react"
class Events extends React.Component {
    constructor() {
        super()
        this.state = {
            num: 0
        }
        this.AddCount = this.AddCount.bind(this)
        this.MoinsCount = this.MoinsCount.bind(this)
    }
    AddCount() {
        this.setState(prevState => {
            return {
                num: prevState.num + 2
            }
        })
    }
    MoinsCount() {
        this.setState(prevState => {
            return {
                num: prevState.num - 2
            }
        })
    }
    render() {
        return (
            <div>
                <p>{this.state.num}</p>
                <button onClick={this.AddCount} className="button">+</button>
                <button onClick={this.MoinsCount} className="button">-</button>
            </div>
        )
    }
}
export default Events