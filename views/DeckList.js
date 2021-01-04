import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
// colors and icons
import { white, blue } from '../utils/colors'
// data
import { getInitialData } from '../utils/api'

const DeckList = ({ navigation }) => {

    const decks = getInitialData()
    console.log('decks: ', decks)

    return (
        <View style={styles.container}>
            {
                Object.keys(decks).map( deck => {

                    const { title, questions } = decks[deck]

                    return (
                        <View key={title} style={styles.question}>
                            <Text>{title}</Text>
                            <Text>{questions.length}</Text>
                            {/* {
                                questions.map( question => <Text key={question.question}>{question.question}</Text>)
                            } */}
                            {/* <TouchableOpacity
                                // second arg in function: a key passed into the rendered comp (first arg) as a prop
                                onPress={() => navigation.navigate('deck', { entryId: deck })}
                            >
                                <Text style={styles.viewDeckText}>view deck</Text>
                            </TouchableOpacity> */}
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