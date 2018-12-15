import React, { Component } from 'react'

const EMBED_URL = 'https://embed.twitch.tv/embed/v1.js';

export class StreamVideo extends Component {

    componentDidMount () {
        let embed;
        const script = document.createElement('script')
        script.setAttribute(
            'src',
            EMBED_URL
        )
        script.addEventListener('load', () => {
            embed = new window.Twitch.Embed(this.props.targetID, { ...this.props })
        })
        document.body.appendChild(script)
    }

    render () {
        return (
            <div id={this.props.targetID}></div>
        )
    }
}