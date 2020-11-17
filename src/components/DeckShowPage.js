import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import SearchResultCard from './SearchResultCard'
import * as D from '../styles/DeckPageStyle'

const DeckShowPage = (props) => {
    let { deck_id } = useParams();

    useEffect(() => {
        props.handleGetSingleDeck(deck_id);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    return (
        <D.StyledDeckPage>
            {props.deckData &&
                <div>
                    <D.DeckTitle>{props.deckData.name}</D.DeckTitle>
                    <D.DeckInfoText>{props.deckData.description}</D.DeckInfoText>
                    <D.DeckInfoText>{props.deckData.cards.length} cards in deck</D.DeckInfoText>
                    <D.DeckCardContainer>
                        {props.deckData.cards.map((card) => {
                            return <SearchResultCard
                                card={card}
                                key={card.id}
                            />
                        })}
                    </D.DeckCardContainer>
                    <button onClick={() => props.handleDeleteDeck(deck_id)}>
                        Delete Deck
                    </button>
                </div>
            }
        </D.StyledDeckPage>
    )
}


export default DeckShowPage
