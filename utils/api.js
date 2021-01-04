import AsyncStorage from '@react-native-async-storage/async-storage'

const DECKS_STORAGE_KEY = 'MobileCards:Decks'

// initial data for decks and cards
// Each deck creates a new key on the object. Each deck has a title and a questions key. title is the title for the specific deck and questions is an array of questions and answers for that deck.
// correctAnswer was added to check easily if the answer is right or not
export const getInitialData = () => {
    return {
        React: {
            title: 'React',
            questions: [
                {
                    question: 'What is React?',
                    answer: 'A library for managing user interfaces',
                    correctAnswer: 'true'
                },
                {
                    question: 'Where do you make Ajax requests in React?',
                    answer: 'The componentWillMount lifecycle event',
                    correctAnswer: 'false'
                }
            ]
        },
        JavaScript: {
            title: 'JavaScript',
            questions: [
                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that function was declared.',
                    correctAnswer: 'true'
                }
            ]
        }
    }
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