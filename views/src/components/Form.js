import React from 'react'

class Form extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="form">
                    <h1>Register Event</h1>
                    <form method="post">
                        <div className="group">
                            <label for="username">Username</label>
                            <input type="text" name="username" id="username" placeholder="USername" class="input" />
                        </div>
                        <div className="group">
                            <label for="fullname">Fullname</label>
                            <input type="text" name="fullname" id="fullname" placeholder="Fullname" class="input" />
                        </div>
                        <div className="group">
                            <label for="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="E-mail@gm.com" class="input" />
                        </div>
                        <div className="group">
                            <label for="password">Password</label>
                            <input type="password" name="password" id="password" placeholder="Password" class="input" />
                        </div>
                        <div>
                            <button type="submit">Regiter</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form