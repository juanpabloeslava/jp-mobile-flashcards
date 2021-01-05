import { ADD_CARD, ADD_DECK, RECEIVE_DECKS } from './actionTypes'
// data
import { getAllDecks, saveDeckTitle } from '../utils/api'

export const receiveDecks = decks => {
    return {
        type: RECEIVE_DECKS,
        decks
    }
}

export const addDeck = deck => {
    console.log('deck as received in addDeck: ', deck)
    return {
        type: ADD_DECK,
        // deck is received after saveDeckTitle() (from './utils/api) is resolved
        deck
    }
}

export const addCard = card => {
    return {
        type: ADD_CARD,
        deck
    }
}

// async actions
export const receiveDecksAsync = () => dispatch => {
    // call api
    getAllDecks()
        // with response, dipatch an action
        .then( decks => {
            console.log('decks from deceiveDecksAsync: ', decks)
            dispatch(receiveDecks(decks))
        })
}

export const addDeckAsync = deckTitle => dispatch => {
    console.log('addNewDeckAsync')
    // call api
    saveDeckTitle(deckTitle)
        // when promise resolves, dispatch an action 
        .then( deck => {
            console.log('deck added in addNewDeckAsync: ', deck)
            dispatch(addDeck(deck))
            return deck
        })
}