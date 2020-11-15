import React, { useEffect } from 'react'

import NewDeckForm from './NewDeckForm';
import DeckBox from './DeckBox';

const DeckPage = (props) => {
    useEffect(() => {
        props.handleGetDecks();
    }, []);

    return (
        <div>
            {props.currentUser ?
            <div>
                <h2>{props.currentUser.username}'s decks</h2>
                <NewDeckForm 
                    handleNewDeck={props.handleNewDeck}
                    user_id={props.currentUser.id}
                />

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