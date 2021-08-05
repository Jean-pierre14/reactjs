import React from 'react'

class Form extends React.Component {
    render() {
        return (
            <div className="form">
                <form method="post">
                    <div className="group">
                        <label for="username">Username</label>
                        <input type="text" name="username" id="username" placeholder="USername" class="input" />
                    </div>
                    <div className="group">
                        <label for="fullname">Fullname</label>
                        <input type="text" name="fullname" id="fullname" placeholder="Fullname" class="input" />
                    </div>
                </form>
            </div>
        )
    }
}

export default Form