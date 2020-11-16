import React from 'react';
import { Link } from 'react-router-dom';

const DeckBox = (props) => {
    return (
        <Link to={`/decks/${props.deck.id}`}>
            <h3>{props.deck.name}</h3>
            <p>{props.deck.description}</p>
            <p>{props.deck.commander_id}</p>
        </Link>
    )
}

export default DeckBox
