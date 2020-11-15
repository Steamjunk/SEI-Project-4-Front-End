import React, { useState } from 'react';

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
        <form onSubmit={(e) => props.handleNewDeck(e, formData)} >
            <h2>New Deck Form</h2>
            <label htmlFor="deckName">Deck Name: </label>
            <input
                type='text'
                name='deckName'
                value={formData.deckName}
                onChange={handleChange}
            />
            <label htmlFor="deckDescription">Deck Description: </label>
            <input
                type='text'
                name='deckDescription'
                value={formData.deckDescription}
                onChange={handleChange}
            />
            <input type='submit' value='Add New Deck' />

        </form>
    )
}

export default NewDeckForm