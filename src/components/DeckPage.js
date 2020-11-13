import React, { useState, useEffect } from 'react'

import NewDeckForm from './NewDeckForm';

const DeckPage = (props) => {
    const [userDecks, setUserDecks] = useState(null);

    // useEffect(() => {
    //     const userDecks = props.handleGetDecks();
    //     if (userDecks) {
    //         setUserDecks(userDecks);
    //     }
    // }, []);

    return (
        <div>
            {props.currentUser ?
            <div>
                <h2>{props.currentUser.username}'s decks</h2>
                {/* new deck form */}
                <NewDeckForm handleNewDeck={props.handleNewDeck} />

                {/* deck container */}
                <div>
                    {userDecks &&
                    <p>we got decks</p>
                    // map user decks
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