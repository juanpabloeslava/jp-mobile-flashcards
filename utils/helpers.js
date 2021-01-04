import AsyncStorage from '@react-native-async-storage/async-storage'
import { getInitialData } from './api'

const DECKS_STORAGE_KEY = 'MobileCards:Decks'

// initial helper methods

// return all of the decks along with their titles, questions, and answers.
export const getAllDecks_depr = async () => {
    AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then(results => {
            // if there's no previous data, use the dummy data
            if (results === null) {
                AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(getInitialData()))
                console.log('initialData on getAllDecks: ', getInitialData())
                return getInitialData()
            }
            // if there's some data already, use it
            else {
                return JSON.parse(results)
            }
        })
}

// export const getAllDecks = async () => {
export async function getAllDecks () {
    try {
        const results = await AsyncStorage.getItem(DECKS_STORAGE_KEY)
        // if results are available, return them, if not, use dummy data
        if (results) {
            const data = JSON.parse(results)
            return data
        } else {
            await AsyncStorage.setItem(
                DECKS_STORAGE_KEY,
                JSON.stringify(getInitialData())
            )
            return getInitialData()
        }
    } catch (error) {
        await AsyncStorage.setItem(
            DECKS_STORAGE_KEY,
            JSON.stringify(getInitialData())
        )
        return getInitialData()
    }
}

// take in a single id argument and return the deck associated with that id.
export const getDeck = (id) => {
    console.log('getDeck')
}

// take in a single title argument and add it to the decks
export const saveDeckTitle = async (title) => {
    console.log('saveDeckTitle')
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify({
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