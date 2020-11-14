import React, { useState, useEffect } from 'react'

import NewDeckForm from './NewDeckForm';
import DeckBox from './DeckBox';

const DeckPage = (props) => {
    const decks = useState(props.userDecks)

    useEffect(() => {
        console.log('deckpage loaded')
        props.handleGetDecks();
    }, []);

    return (
        <div>
            {props.currentUser ?
            <div>
                <h2>{props.currentUser.username}'s decks</h2>
                {/* new deck form */}
                <NewDeckForm 
                    handleNewDeck={props.handleNewDeck}
                    user_id={props.currentUser.id}
                />

                {/* deck container */}
                <div>
                    {props.userDecks &&
                    <div>
                        <p>we got decks</p>
                        {props.userDecks.map((deck) => {
                            return <DeckBox deck={deck} key={deck.id} />
                        })}
                    </div>
                    }
                </div>




                
            </div>
            :
                <h3>You shouldn't be here...</h3>
            }

        </div>
    )
}


export default DeckPage