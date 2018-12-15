import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

import { Stream } from './stream'

const CLIENT_ID = process.env.REACT_APP_TWITCH_CLIENT_ID;

export class StreamsList extends Component {

    constructor(props){
        super(props);

        this.state = {
            streams: [],
            id: -1
        }
    }

    static propTypes = {
        gameId: PropTypes.string
    }

    _handleResults = (gameId) => {
        fetch(`https://api.twitch.tv/helix/streams?game_id=${gameId}`,
            { 
            method: 'get', 
            headers: new Headers({
                'Client-ID': CLIENT_ID
            })
            }
        )
        .then(res => res.json())
        .then(results => {
            const { data = [] } = results
            this.setState({ streams: data })
        })
    }

    componentWillReceiveProps(props) {
        if(props.id !== this.state.id) {
            this.setState({id: props.id})  
            this._handleResults(parseInt(props.id))
        }
    }

    render() {
        const { streams } = this.state
        return (
            <div className="StreamsList">
            {
                streams.map(stream => {
                    const { language, started_at, title, user_id, user_name, viewer_count } = stream
                    return (
                        <div key={stream.id} className="StreamsList-Item">
                            <Stream
                                id={stream.id}
                                language={language}
                                started_at={started_at}
                                title={title}
                                user_id={user_id}
                                user_name={user_name}
                                viewer_count={viewer_count}
                            ></Stream>
                        </div>
                    )
                })
            }
            </div>
        )
    }
}