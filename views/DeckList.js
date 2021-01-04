import React, { useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
// colors and icons
import { white, blue } from '../utils/colors'
// data
import { getInitialData } from '../utils/api'
import { getAllDecks } from '../utils/helpers'
// redux
import { connect, useSelector, useDispatch } from 'react-redux'
import { receiveDecks, receiveDecksAsync } from '../actions'

// const DeckList = ({ navigation }) => {
const DeckList = (props) => {

    const { navigation } = props
    const dispatch = useDispatch()

    const decks = getInitialData()

    // on comp mount
    // useEffect(() => {
    //     console.log('dummy data: ', getInitialData())
    //     // return all of the decks along with their titles, questions, and answers.
    //     getAllDecks()
    //         // .then(decks => dispatch(receiveDecks(decks)))
    //         .then( decks => {
    //             console.log(decks)
    //             // dispatch(receiveDecks(decks))
    //         })
    //         .catch( err => {
    //             console.log(err)
    //         })
    // }, [])
    
    // on comp mount
    useEffect(() => {
        console.log('dummy data: ', getInitialData())
        // dispatch(receiveDecksAsync())        // not yet, needs thunk
    }, [])

    console.log('props in decklist comp: ', props)
    
    const state = useSelector( (state) => state )

    // const { decks } = props
    // const { state } = props
    // console.log('decks: ', decks)
    console.log('state: ', state)

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

// const mapStateToProps = (decks) => {
// const mapStateToProps = ({ decks }) => {
//     return decks
// }

// export default connect(
//     mapStateToProps
// )(DeckList) 

export default DeckList