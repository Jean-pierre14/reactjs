import React from 'react'

class Form extends React.Component {
    render() {
        return (
            <div className="form">
                <form method="post">
                    <div className="group">
                        <label for="username">Username</label>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form