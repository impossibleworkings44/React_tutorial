//counter button eg for state method in class

import React, { Component } from 'react'


//never directly increment the state variable use setState
//if u want some code to be excuted after setstate write there only not after the fn

class Counter extends Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        },

            // () => {
            //     console.log('callback:', this.state.count)
            // }

        )
    }

    //when you want to update on prev state value,pass in fn argument instead of object
    //     this.setState((prevstate) => ({
    //     count: prevstate + 1
    // }))


    render() {

        return (
            <div>
                <h1>count :{this.state.count}</h1>
                <button onClick={() => this.increment()}>Click me</button>
            </div>
        )

    }
}


export default Counter