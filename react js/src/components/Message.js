//state example in class
//use coonstructor and use super()

import React, { Component } from 'react'

class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: 'learning state '
        }

    }

    changeMessage() {
        this.setState({
            message: 'done with one tutorial of state'
        })
    }

    render() {

        return (
            <div>
                <h1>Learning state {this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>subscribe!!</button>
            </div>
        )
    }
}


export default Message
