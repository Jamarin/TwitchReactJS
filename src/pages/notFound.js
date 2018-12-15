import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NotFound extends Component {
    render () {
        return (
            <div>
                <h1 className="title">Not found!</h1>
                <h2 className="subtitle">The page is not found.</h2>
                <Link to="/">Go home!</Link>
            </div>
        )
    }
}