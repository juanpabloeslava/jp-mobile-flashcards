import { combineReducers } from 'redux'
import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from '../actions/actionTypes'

const initialState = {}

const decks = ( state = initialState, action ) => {
    switch (action.type) {
        case RECEIVE_DECKS :
            return {

            }
        case ADD_DECK : 
            return {

            }
        case ADD_CARD :
            return {

            }
        default :
            return state
    }
}

export default combineReducers({
    decks
})