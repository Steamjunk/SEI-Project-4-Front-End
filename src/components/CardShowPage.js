import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Bold } from '../styles/GlobalStyle';

import * as C from '../styles/CardShowStyle'


const CardShowPage = (props) => {
    let { id } = useParams();

    const [cardData, setCardData] = useState(null)
    const [selectedDeckId, setSelectedDeckId] = useState(null)

    let isCreature = false;
    let isLegendary = false;
    let commanderCandidate = false;

    if (cardData) {
        if (cardData.types) {
            cardData.types.forEach(type => {
                if (type.type === "Creature") {
                    isCreature = true;
                }
            });
        }

        if (cardData.supertypes) {
            cardData.supertypes.forEach(supertype => {
                if (supertype.supertype === "Legendary") {
                    isLegendary = true;
                }
            });
        }

        if (isCreature && isLegendary) {
            commanderCandidate = true;
        }
    }

    let deckOptions = []
    if (props.userDecks) {
        props.userDecks.forEach(deck => {
            deckOptions.push(
                <option value={deck.id} key={deck.id} >{deck.name}</option>
            )
        })
    }

    const handleDeckChange = (e) => {
        setSelectedDeckId(e.target.value)
    }


    const callAPI = () => {
        // fetch(`https://the-command-tower.herokuapp.com/cards/show/${id}`)
        fetch(`http://localhost:9000/cards/show/${id}`)
            .then(res => res.json())
            .then(res => {
                setCardData(res)
            })
            .catch(err => console.error(err))
    }
    useEffect(() => {
        callAPI();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    return (
        <C.CardShowPage>
            {cardData &&
                <C.CardContainer>
                    <C.CardShowImage src={cardData.image_url} alt={`${cardData.name} card art`} />
                    <C.CardInfo>
                        <h3>{cardData.name}</h3>
                        <h4>
                            {cardData.supertypes && cardData.supertypes.map(supertype => {
                                return <span key={supertype.id}>{supertype.supertype} </span>
                            })}
                            {cardData.types && cardData.types.map(type => {
                                return <span key={type.id}>{type.type} </span>
                            })}
                            {cardData.subtypes && cardData.subtypes.map(subtype => {
                                return <span key={subtype.id}> - {subtype.subtype} </span>
                            })}
                        </h4>
                        <p>{cardData.text}</p>
                        <p>{cardData.flavor}</p>
                        {isCreature &&
                            <div>
                                <p><Bold>Power:</Bold> {cardData.power}</p>
                                <p><Bold>Toughness:</Bold> {cardData.toughness}</p>
                            </div>
                        }
                        <p><Bold>Rarity:</Bold> {cardData.rarity}</p>
                        <p><Bold>Set:</Bold> {cardData.set_name}</p>
                        {props.userDecks &&
                            <form onSubmit={(e) => props.handleAddCard(e, cardData.id, selectedDeckId)} >
                                <select
                                    onChange={handleDeckChange}
                                    defaultValue='Select Deck'
                                >
                                    <option disabled hidden>Select Deck</option>
                                    {deckOptions}
                                </select>
                                {commanderCandidate &&
                                    <div>
                                        <input type='checkbox' name='makeCommander' />
                                        <label htmlFor="makeCommander">Make Commander</label>
                                    </div>
                                }
                                <input type='submit' value='Add to Deck' />
                            </form>
                        }
                    </C.CardInfo>
                </C.CardContainer>
            }
        </C.CardShowPage>
    )
}


export default CardShowPage