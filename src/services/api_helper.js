import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:9000" // heroku address goes here
})

// ---------------------- Auth ---------------------- //
export const registerUser = async (registerData) => {
    try {
        const resp = await api.post('/auth/signup', registerData);
        localStorage.setItem('authToken', resp.data.token);
        api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
        return resp.data.user;
        
    } catch (err) {
        console.error(err)
    }
    return false
}

export const loginUser = async (loginData) => {
    try {
        const resp = await api.post('/auth/login', loginData);
        localStorage.setItem('authToken', resp.data.token);
        api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
        return resp.data.user;
    } catch (err) {
        console.error(err)
    }
    return false
}

export const verifyUser = async () => {
    const token = localStorage.getItem('authToken');
    
    if (token) {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        try {
            const resp = await api.get('/auth/verify');
            return resp.data
        } catch (err) {
            console.error(err)
        }
        
    }
    return false;
}

// ---------------------- Deck ---------------------- //
export const newDeck = async (formData) => {
    try {
        const resp = await api.post(`/decks/new`, formData);
        return resp.data
    } catch (err) {
        console.error(err)
    }
    return false
}


export const getUserDecks = async () => {
    try {
        const resp = await api.get('/decks');
        return resp.data
    } catch (err) {
        console.error(err)
    }
    return false
}

export const getDeck = async (deck_id) => {
    try {
        const resp = await api.get(`/decks/${deck_id}`);
        return resp.data
    } catch (err) {
        console.error(err)
    }
    return false
}

export const addDeckCard = async (deckCardIds) => {
    try {
        console.log(deckCardIds.card_id)
        console.log(deckCardIds.deck_id)
        const resp = await api.post('/decks/addCard', deckCardIds)
        return resp.data
    } catch (err) {
        console.error(err)
    }
    return false
}

// ---------------------- Search ---------------------- //
export const getSupertypes = async () => {
    try {
        const resp = await api.get('/cards/supertypes');
        return resp.data
    } catch (err) {
        console.error(err)
    }
    return false
}

export const getTypes = async () => {
    try {
        const resp = await api.get('/cards/types');
        return resp.data
    } catch (err) {
        console.error(err)
    }
    return false
}

export const getSubtypes = async () => {
    try {
        const resp = await api.get('/cards/subtypes');
        return resp.data
    } catch (err) {
        console.error(err)
    }
    return false
}