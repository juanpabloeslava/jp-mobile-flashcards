import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
// colors and icons
import { colors } from '../utils/colors'
// comps
import ActionButton from '../components/ActionButton'
// redux
import { useSelector, useDispatch } from 'react-redux'



const Deck = (props) => {

    const decks = useSelector(state => state.decks)
    const { navigation } = props
    const id = props.route.params.deckID
    const deck = decks[id]
    console.log('decks from state in Deck comp:', decks)
    console.log('deck in Deck comp:', deck)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{deck.title}</Text>
            <Text>{deck.questions.length} Cards</Text>
            <ActionButton 
                onPress={ () => console.log('add card')}
                text='Add Card'
                color={colors.purple}

            />
            <ActionButton 
                onPress={ () => console.log('take quiz')}
                text='Take Quiz'
                color={colors.orange}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        color: colors.blue
    },
})

export default Deck;