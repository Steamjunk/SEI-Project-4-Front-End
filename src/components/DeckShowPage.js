import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import SearchResultCard from './SearchResultCard'


const DeckShowPage = (props) => {
    let { deck_id } = useParams();

    useEffect(() => {
        props.handleGetSingleDeck(deck_id);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    return (
        <div>
            <h2>Deck Show Page</h2>
            {props.deckData &&
                <div>
                    <h3>{props.deckData.name}</h3>
                    <p>{props.deckData.cards.length} cards in deck</p>
                    <div>
                        {props.deckData.cards.map((card) => {
                            return <SearchResultCard
                                card={card}
                                key={card.id}
                            />
                        })}
                    </div>
                    <button onClick={() => props.handleDeleteDeck(deck_id)}>
                        Delete Deck
                    </button>
                </div>
            }
        </div>
    )
}


export default DeckShowPage
