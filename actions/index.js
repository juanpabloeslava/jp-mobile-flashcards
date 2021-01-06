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

export const addCard = (deck, card) => {
    return {
        type: ADD_CARD,
        deck,
        card
    }
}


// async actions
export const receiveDecksAsync = () => dispatch => {
    // call api
    getAllDecks()
        // with response, dipatch an action
        .then( decks => {
            dispatch(receiveDecks(decks))
        })
}

export const addDeckAsync = deckTitle => dispatch => {
    console.log('addDeckAsync')
    // call api
    saveDeckTitle(deckTitle)
        // when promise resolves, dispatch an action 
        .then( deck => {
            // the deck response is what's passed into the action creator
            dispatch(addDeck(deck))
            return deck
        })
}

export const addCardAsync = () => dispatch => {
    console.log('addCardAsync')

}