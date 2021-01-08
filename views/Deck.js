import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'
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

    // animation state
    const [opacity, setOpacity] = useState( new Animated.Value(0) )
    
    // on comp mount
    useEffect(() => {
        // handle opacity animation
        Animated.timing( opacity, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start()
    }, [Animated])


    // functions
    const addCard = () => {
        console.log('will go to add new card')
        // go to the add card view
        navigation.navigate('Add Card', { deckID: id })
    }

    const takeQuiz = () => {
        if (deck.questions.length === 0) {
            alert('There are no Cards on this Deck. Add some Cards first to study.')
        }
        else {
            navigation.navigate('Quiz', { deckID: id })
        }
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
            <Animated.View style={[styles.deck, {opacity}]}>
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
                    onPress={takeQuiz}
                    text='Take Quiz'
                    color={colors.green}
                />
            </Animated.View>
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
    deck: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 12,
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