import { combineReducers } from 'redux'
import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from '../actions/actionTypes'

const initialState = {}

const decks = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_DECKS:
            return {
                ...state,
                // add the new deck
                ...action.decks
            }
        case ADD_DECK:
            return {
                ...state,
                // deck comes all setup since it was added to the AsyncStorage
                ...action.deck
            }
        case ADD_CARD:
            const { question, answer, correctAnswer } = action.card
            const deck = action.deck

            return {
                ...state,
                // update the current deck
                [deck]: {
                    ...state[deck],
                    // update question prop
                    questions: [
                        ...state[deck].questions,
                        { 
                            // add question, answer, and correct answer
                            question,
                            answer,
                            correctAnswer
                        }
                    ]
                }
            }   
        default:
            return state
    }
}

export default combineReducers({
    decks
})