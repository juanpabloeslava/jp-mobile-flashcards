import { ADD_CARD, ADD_DECK, RECEIVE_DECKS } from './actionTypes'

export const addDeck = deck => {
    return {
        type: ADD_DECK,
        deck
    }
}

export const receiveDecks = decks => {
    return {
        type: RECIEVE_DECKS,
        decks
    }
}

export const addCard = card => {
    return {
        type: ADD_CARD,
        deck
    }
}