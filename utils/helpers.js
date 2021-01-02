import { AsyncStorage } from '@react-native-async-storage/async-storage'
import { initalData } from './api'

const DECKS_STORAGE_KEY = 'MobileCards:Decks';

// initial helper methods

// return all of the decks along with their titles, questions, and answers.
export async function getAllDecks () {
    AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then( results => {
            // if there's no previous data, use the dummy data
            if ( results === null ) {
                AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(initalData))
                return initalData
            } 
            // if there's some data already, use it
            else {
                return JSON.parse(results)
            }
        })
}

// take in a single id argument and return the deck associated with that id.
export const getDeck = (id) => {
    console.log('getDeck')
}

// take in a single title argument and add it to the decks
export async function saveDeckTitle (title) {
    console.log('saveDeckTitle')
    AsyncStorage.getItem(DECKS_STORAGE_KEY, JSON.stringify({
        [title]: {
            title: title,
            questions: []
        }
    }))
}

// take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.
export const addCardToDeck = (title, card) => {
    console.log('addCardToDeck')
}