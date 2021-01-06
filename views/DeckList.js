import React, { useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
// colors and icons
import { colors } from '../utils/colors'
// redux
import { useSelector, useDispatch } from 'react-redux'
import { receiveDecksAsync } from '../actions'

const DeckItem = (props) => {
    const { title, questions } = props
    return (
        <View key={title} style={styles.question}>
            <Text>{title}</Text>
            <Text>{questions.length}</Text>
            <TouchableOpacity
                // second arg in function: a key passed into the rendered comp (first arg) as a prop
                onPress={() => {
                    console.log(currentDeck)
                    return navigation.navigate('Deck Details', { deckID: deck })
                }}
            >
                <Text style={styles.viewDeckText}>view deck</Text>
            </TouchableOpacity>
        </View>
    )
}

const DeckList = (props) => {

    const { navigation } = props
    const dispatch = useDispatch()

    // on comp mount
    useEffect(() => {
        // get all decks from AsyncStore and put them in the state
        dispatch(receiveDecksAsync())

    }, [])

    const decks = useSelector(state => state.decks)
    console.log('decks obj in  deck list: ', decks)
    
    // an array of the decks without the keys, so just the objects
    const decksData = Object.values(decks)
    console.log('decksData: ', decksData)


    const renderDeckItem = ({ title, questions }) => {
        // this gives it time to render without error while all the data gets into the state
        if (title === undefined || questions === undefined) {
            return (
                <View style={styles.container}>
                    <Text>It appears things haven't finished loading.</Text>
                </View>
            )
        }
        return (
            <View style={styles.question}>
                <Text>{title}</Text>
                <Text>{questions.length}</Text>
                <TouchableOpacity
                    // second arg in function: a key passed into the rendered comp (first arg) as a prop
                    onPress={() => navigation.navigate('Deck Details', { deckID: deck })}
                >
                    <Text style={styles.viewDeckText}>view deck</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={decksData}
                renderItem={renderDeckItem}
            />
        </View>
    )
    // return (
    //     <View style={styles.container}>
    //         {
    //             Object.keys(decks).map(deck => {

    //                 const currentDeck = decks[deck]
    //                 const { title, questions } = currentDeck

    //                 return (
    //                     <View key={title} style={styles.question}>
    //                         <Text>{title}</Text>
    //                         <Text>{questions.length}</Text>
    //                         <TouchableOpacity
    //                             // second arg in function: a key passed into the rendered comp (first arg) as a prop
    //                             onPress={() => {
    //                                 console.log(currentDeck)
    //                                 return navigation.navigate('Deck Details', { deckID: deck })
    //                             }}
    //                         >
    //                             <Text style={styles.viewDeckText}>view deck</Text>
    //                         </TouchableOpacity>
    //                     </View>
    //                 )
    //             })
    //         }
    //     </View>
    // )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    question: {
        marginBottom: 16
    },
    viewDeckText: {
        color: colors.blue,
        margin: 16
    }
})

export default DeckList