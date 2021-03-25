//event handler in class example
//event handler in camelcase and is function and not fn call

import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler() {
        console.log('button clicked1')
    }



    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>class event handlereg</button>
            </div>
        )
    }
}

export default ClassClick