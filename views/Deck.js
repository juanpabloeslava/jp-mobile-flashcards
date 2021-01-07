import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
// colors and icons
import { colors } from '../utils/colors'
// comps
import ActionButton from '../components/ActionButton'
// redux 
import { useSelector, useDispatch } from 'react-redux'
import { receiveDecksAsync } from '../actions'



const Deck = (props) => {

    const { navigation } = props
    const dispatch = useDispatch()

    const id = props.route.params.deckID
    const decks = useSelector(state => state.decks)
    const deck = decks[id]
    console.log('decks from state in Deck comp:', decks)
    console.log('deck in Deck comp:', deck)

    // functions
    const addCard = () => {
        console.log('will go to add new card')
        // go to the add card view
        navigation.navigate('Add Card', { deckID: id })
    }

    // this gives it time to render without error while all the data gets into the state
    if (deck === null || deck === undefined) {
        return (
            <View style={styles.container}>
                <Text>It appears things haven't finished loading.</Text>
            </View>
        )
    }

    const cards = deck.questions.length === 1 ? 'Card' : 'Cards'

    return (
        <View style={styles.container}>
            <View style={styles.deck}>
                <Text style={styles.title}>
                    {deck.title}
                </Text>
                <Text style={ { margin: 16 } }>
                    {`${deck.questions.length} ${cards}`}
                </Text>
                <ActionButton 
                    onPress={addCard}
                    text='Add Card'
                    color={colors.blue}

                />
                <ActionButton 
                    onPress={ () => navigation.navigate('Quiz', { deckID: id })}
                    text='Take Quiz'
                    color={colors.green}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16
    },
    deck: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 16,
        backgroundColor: colors.white2,
        alignSelf: 'stretch',
        borderRadius: 8,
        shadowRadius: 8,
        shadowColor: 'rgba(0, 0, 0, 0.16)',
        shadowOffset: {
            width: 0,
            height: 3
        }

    },
    title: {
        fontSize: 24,
        color: colors.blue,
        margin: 16
    },
})

export default Deck;