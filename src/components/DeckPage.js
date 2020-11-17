import React from 'react'
import NewDeckForm from './NewDeckForm';
import DeckBox from './DeckBox';
import * as D from '../styles/DeckPageStyle'


const DeckPage = (props) => {
    return (
        <D.StyledDeckPage>
            {props.currentUser &&
            <D.DeckPageContainer>
                <NewDeckForm 
                    handleNewDeck={props.handleNewDeck}
                    user_id={props.currentUser.id}
                    />

                <div>
                    {props.userDecks &&
                    <div>
                        <h2>{props.currentUser.username}'s decks</h2>
                        {props.userDecks.map((deck) => {
                            return <DeckBox deck={deck} key={deck.id} />
                        })}
                    </div>
                    }
                </div>
            </D.DeckPageContainer>}
        </D.StyledDeckPage>
    )
}

export default DeckPage