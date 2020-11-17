import React, { useState } from 'react';
import * as D from '../styles/DeckPageStyle'


const NewDeckForm = (props) => {
    const [formData, setFormData] = useState({
        deckName: '',
        deckDescription: '',
        user_id: props.user_id
    })

    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
          }));
    }

    return (
        <D.NewDeckForm onSubmit={(e) => props.handleNewDeck(e, formData)} >
            <h2>Make A New Deck</h2>
            <D.StyledLabel htmlFor="deckName">Deck Name: </D.StyledLabel>
            <D.StyledInput
                type='text'
                name='deckName'
                value={formData.deckName}
                onChange={handleChange}
            />
            <D.StyledLabel htmlFor="deckDescription">Deck Description: </D.StyledLabel>
            <D.StyledInput
                type='text'
                name='deckDescription'
                value={formData.deckDescription}
                onChange={handleChange}
            />
            <D.StyledInput type='submit' value='Add New Deck' />

        </D.NewDeckForm>
    )
}

export default NewDeckForm