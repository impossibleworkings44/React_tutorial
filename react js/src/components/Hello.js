//props eg for class use this.props.name
//this must in class components

import React, { Component } from 'react'

class Hello extends Component {
    render() {
        return <h1>hello class fn {this.props.name}</h1>
    }
}
//use this.props.name for class component

export default Hello
