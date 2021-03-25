//conditional rendering 

import React, { Component } from 'react'
class UserGreeting extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedin: true
        }

    }

    render() {
        return (
            this.state.isLoggedin ?
                <div>Welcome nitin</div> :
                <div>Welcome Guest</div>
        )
    }

}

export default UserGreeting