import { ADD_CARD, ADD_DECK, RECEIVE_DECKS } from './actionTypes'
// data
import { getAllDecks } from '../utils/api'

export const addDeck = deck => {
    return {
        type: ADD_DECK,
        deck
    }
}

export const receiveDecks = decks => {
    return {
        type: RECEIVE_DECKS,
        decks
    }
}

export const addCard = card => {
    return {
        type: ADD_CARD,
        deck
    }
}

// async
export const receiveDecksAsync = () => (dispatch) => {
    getAllDecks()
        .then( decks => {
            console.log('decks from deceiveDecksAsync: ', decks)
            dispatch(receiveDecks(decks))
        })
}