import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

import { Link } from 'react-router-dom'

import { StreamsList } from '../components/streamsList'

const CLIENT_ID = process.env.REACT_APP_TWITCH_CLIENT_ID;

export class Detail extends Component {

    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    state = { game: {
        id: '',
        box_art_url: '',
        name: '',
    } }

    _fetchGame ({ gameId }) {
        fetch(`https://api.twitch.tv/helix/games?id=${gameId}`,
            { 
            method: 'get', 
            headers: new Headers({
                'Client-ID': CLIENT_ID
            })
            }
        )
        .then(res => res.json())
        .then(game => {
            this.setState({game: game.data[0]})
        })
    }

    componentDidMount() {
        const { gameId } = this.props.match.params
        this._fetchGame({ gameId })
    }

    render () {

        const { id, box_art_url, name } = this.state.game
        return (
            <div>
                <Link to="/" className="button is-info">Go back</Link>
                <h1 className="title">{name}</h1>
                <img src={box_art_url.replace("{width}", 350).replace("{height}", 350)} alt={name}/>
                <h2 className="subtitle">Streams</h2>
                <StreamsList id={id}></StreamsList>
            </div>
        )
    }
}