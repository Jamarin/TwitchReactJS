import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { StreamVideo } from './streamVideo'

export class Stream extends Component {
    static propTypes = {
        id: PropTypes.string,
        title: PropTypes.string,
        user_name: PropTypes.string,
        user_id: PropTypes.string
    }

    render () {
        const { id, title, user_name, user_id } = this.props

        return (
            <Link to={`/stream/${user_name}`} className="card">
                <div className="card-image">
                    <StreamVideo
                        targetID={id}
                        width="100%"
                        height="400"
                        channel={user_name}>
                    </StreamVideo>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{title}</p>
                            <p className="title is-6">{user_name}</p>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}