import React, { useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
// colors and icons
import { white, blue } from '../utils/colors'
// data
import { getInitialData } from '../utils/api'
// redux
import { useSelector, useDispatch } from 'react-redux'
import { receiveDecksAsync } from '../actions'

const DeckList = (props) => {

    const { navigation } = props
    const dispatch = useDispatch()

    // on comp mount
    useEffect(() => {
        // get all decks from AsyncStore and put them in the state
        dispatch(receiveDecksAsync())

    }, [])
    
    const decks = useSelector(state => state.decks) 
    console.log('decks in  deck list: ', decks)

    return (
        <View style={styles.container}>
            {
                Object.keys(decks).map(deck => {

                    const currentDeck = decks[deck]
                    const { title, questions } = currentDeck

                    return (
                        <View key={title} style={styles.question}>
                            <Text>{title}</Text>
                            <Text>{questions.length}</Text>
                            <TouchableOpacity
                                // second arg in function: a key passed into the rendered comp (first arg) as a prop
                                onPress={() => {
                                    console.log(currentDeck)
                                    return navigation.navigate('Deck', { deckID: deck })
                                }}
                            >
                                <Text style={styles.viewDeckText}>view deck</Text>
                            </TouchableOpacity>
                        </View>
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    question: {
        marginBottom: 16
    },
    viewDeckText: {
        color: blue,
        margin: 16
    }
})

export default DeckList