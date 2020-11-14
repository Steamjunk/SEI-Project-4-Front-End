import React from 'react';

const DeckBox = (props) => {
    return (
        <div>
            <h2>Deck Box</h2>
            <h3>{props.deck.name}</h3>
        </div>
    )
}

export default DeckBox