import React from 'react';
import { Link } from 'react-router-dom';
import * as D from '../styles/DeckPageStyle'


const DeckBox = (props) => {
    return (
        <Link to={`/decks/${props.deck.id}`}>
            <D.StyledDeckBox>
                <h3>{props.deck.name}</h3>
                <p>{props.deck.description}</p>
                <p>{props.deck.commander_id}</p>
            </D.StyledDeckBox>
        </Link>
    )
}

export default DeckBox
