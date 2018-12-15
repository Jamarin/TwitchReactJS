import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

import { Link } from 'react-router-dom'

import { StreamVideo } from '../components/streamVideo'

const CLIENT_ID = process.env.REACT_APP_TWITCH_CLIENT_ID;

export class DetailStream extends Component {

    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    state = { stream: {
        id: '',
        user_name: '',
        viewer_count: '',
    },
    loading: true }

    _fetchStream ({ userLogin }) {
        fetch(`https://api.twitch.tv/helix/streams?user_login=${userLogin}`,
            { 
            method: 'get', 
            headers: new Headers({
                'Client-ID': CLIENT_ID
            })
            }
        )
        .then(res => res.json())
        .then(stream => {
            console.log(stream)
            this.setState({stream: stream.data[0]})
            this.setState({loading: false})
        })
    }

    componentWillMount() {
        const { userLogin } = this.props.match.params
        this._fetchStream({ userLogin })
    }

    render () {
        if(this.state.loading) {
            return (<p>Wait until loading...</p>)
        } else {
            const { id, user_name, viewer_count, game_id } = this.state.stream
            return (
                <div>
                    <Link to={`/game/${game_id}`} className="button is-info">Go back</Link>
                    <h1 className="title">{user_name}</h1>
                    <StreamVideo
                        targetID={id}
                        width="100%"
                        height="800"
                        channel={user_name}
                    ></StreamVideo>
                    <h2 className="subtitle">{viewer_count}</h2>
                </div>
            )
        }
    }
}