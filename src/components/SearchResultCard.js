import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import * as S from '../styles/SearchPageStyles';
import { Bold } from '../styles/GlobalStyle';


const SearchResultCard = (props) => {
    const [cardData] = useState(props.card)
    const [selectedDeckId, setSelectedDeckId] = useState(null)

    let isCreature = false;
    if(cardData.types) {
        cardData.types.forEach(type => {
            console.log(type)
            if (type.type === "Creature") {
                isCreature = true;
            }
        });
    }

    let isLegendary = false;
    if(cardData.supertypes) {
        cardData.supertypes.forEach(supertype => {
            console.log(supertype);
            if (supertype.supertype === "Legendary") {
                isLegendary = true;
            }
        });
    }

    let commanderCandidate;
    if (isCreature && isLegendary) {
        commanderCandidate = true;
    } else {
        commanderCandidate = false;
    }

    

    let deckOptions = []
    if (props.userDecks) {
        props.userDecks.forEach(deck => {
            console.log(deck.name)
            deckOptions.push(
                <option value={deck.id} key={deck.id} >{deck.name}</option>
            )
        })
    }

    const handleDeckChange = (e) => {
        console.log(e.target.value)

        setSelectedDeckId(e.target.value)
    }


    return (
        <S.ResultCard>
            <Link to={`/card/${cardData.id}`}>
                {cardData.image_url ?
                    <S.ResultCardArt src={cardData.image_url} alt={`${cardData.name} card art`} />
                    :
                    <S.ResultCardArt src='https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/f/f8/Magic_card_back.jpg/revision/latest?cb=20140813141013&format=original' alt={`${cardData.name} card art`} />
                }
            </Link>
            <S.CardInfo>
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
            </S.CardInfo>
        </S.ResultCard>
    )
}

export default SearchResultCard