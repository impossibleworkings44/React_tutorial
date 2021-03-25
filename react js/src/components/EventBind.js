//binding event handlers    

import React, { Component } from 'react'

class EventBind extends Component {
    constructor() {
        super()
        this.state = {
            message: 'hello'
        }
    }


    // clickHandler() {

    //     this.setState({
    //         message: 'goodbye'
    //     })

    //     console.log(this)
    // }

    clickHandler = () => {
        this.setState({
            message: 'Goodbye'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onclick={this.clickHandler.bind(this)}>eventbind</button> */}
                <button onclick={() => this.clickHandler()}>Click</button>
            </div>
        )
    }
}

export default EventBind