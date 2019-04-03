import React, { Component } from 'react';

class Card extends Component {

    render() {
        const image = this.props.url
        return (
            <img src={image} />
        )
    }
}

export default Card;