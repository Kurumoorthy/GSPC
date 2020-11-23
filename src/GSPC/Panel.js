import React, { Component } from 'react'

export class Panel extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default Panel
