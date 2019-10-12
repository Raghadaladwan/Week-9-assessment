import React, { Component } from 'react'

export default class UserOutput extends Component {
    render() {
        const {username}=this.props
        return (
            <div>
                <p>one</p>
                <p>two</p>
                <p>{username}</p>
            </div>
        )
    }
}




