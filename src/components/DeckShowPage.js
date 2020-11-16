import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";


const DeckShowPage = (props) => {
    let { deck_id } = useParams();

    const [deckData, setDeckData] = useState(null)

    // const callAPI = () => {
    //     fetch(`http://localhost:9000/decks/${deck_id}`)
    //         .then(res => res.json())
    //         .then(res => {
    //             console.log(res);
    //             setDeckData(res);
    //         })
    //         .catch(err => console.error(err))
            
    // }
    useEffect(() => {
        const deck = props.handleGetSingleDeck(deck_id);
        console.log(deck)
        if(deck) {
            setDeckData(deck)
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    return (
        <div>
            <h2>Deck Show Page</h2>
            {deckData &&
                <div>
                    <h3>{deckData.name}</h3>
                </div>
            }
        </div>
    )
}


export default DeckShowPage
