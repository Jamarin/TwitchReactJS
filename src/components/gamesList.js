import React, { Component } from 'react'

import { Game } from './game'

const CLIENT_ID = process.env.REACT_APP_TWITCH_CLIENT_ID;

export class GamesList extends Component {
    state = { games: [] }

    _handleResults = () => {
        fetch(`https://api.twitch.tv/helix/games/top`,
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
            console.log(data)
            this.setState({ games: data })
        })
    }

    componentDidMount() {
        this._handleResults();
    }

    render() {
        const { games } = this.state
        return (
            <div className="GamesList">
            {
                games.map(game => {
                    return (
                        <div key={game.id} className="GamesList-Item">
                            <Game
                                id={game.id}
                                name={game.name}
                                box_art={game.box_art_url}
                            ></Game>
                        </div>
                    )
                })
            }
            </div>
        )
    }
}