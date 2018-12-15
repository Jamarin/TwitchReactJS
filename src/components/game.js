import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export class Game extends Component {
    static propTypes = {
        id: PropTypes.string,
        name: PropTypes.string,
        box_art: PropTypes.string
    }

    render () {
        const { id, name, box_art } = this.props

        return (
            <Link to={`/game/${id}`} className="card">
                <div className="card-image">
                    <figure className="image">
                        <img
                            alt={name}
                            src={box_art.replace("{width}", 200).replace("{height}", 200)} />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{name}</p>
                            <p className="title is-6">{id}</p>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}