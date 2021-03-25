//counter using class component - beginning of react hook tutorial youtube

import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }

    }

    incrementC = () => {

        this.setState({
            count: this.state.count + 1
        })
    }

    render() {

        return (
            <div>
                <button onClick={this.incrementC}>count{this.state.count}</button>
            </div>
        )
    }
}

export default Counter
