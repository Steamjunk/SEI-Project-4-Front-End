import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Bold } from '../styles/GlobalStyle';


const CardShowPage = () => {
    let { id } = useParams();

    const [cardData, setCardData] = useState(null)

    const callAPI = () => {
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
        <div>
            <h4>Card Show Page</h4>
            {cardData &&
                <div>
                    <h3>{cardData.name}</h3>
                    {cardData.image_url ?
                        <img src={cardData.image_url} alt={`${cardData.name} card art`} />
                        :
                        <img src='https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/f/f8/Magic_card_back.jpg/revision/latest?cb=20140813141013&format=original' alt={`${cardData.name} card art`} />
                    }

                    <h4>
                        {cardData.supertypes && cardData.Supertypes.map((supertype, index) => {
                            return <span key={index}>{supertype.supertype} </span>
                        })}
                        {cardData.Types && cardData.Types.map((type, index) => {
                            return <span key={index}>{type.type} </span>
                        })}
                        {cardData.Subtypes && cardData.Subtypes.map((subtype, index) => {
                            return <span key={index}> - {subtype.subtype} </span>
                        })}
                    </h4>
                    <p>{cardData.text}</p>
                    <p>{cardData.flavor}</p>
                    <p><Bold>Power:</Bold> {cardData.power}</p>
                    <p><Bold>Toughness:</Bold> {cardData.toughness}</p>
                    <p><Bold>Rarity:</Bold> {cardData.rarity}</p>
                    <p><Bold>Set:</Bold> {cardData.set_name}</p>
                    <button>Add to Deck</button>
                </div>
            }
        </div>
    )
}


export default CardShowPage