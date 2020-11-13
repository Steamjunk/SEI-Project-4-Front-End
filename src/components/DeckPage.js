import React from 'react'

const DeckPage = (props) => {
    return (
        <div>
            <h2>Deck Page</h2>
            {props.currentUser ?
                <h3>{props.currentUser.username}'s decks</h3>
            :
                <h3>You shouldn't be here...</h3>
            }

        </div>
    )
}


export default DeckPage