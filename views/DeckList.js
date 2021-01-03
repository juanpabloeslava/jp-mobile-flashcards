import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
// colors and icons
import { white } from '../utils/colors'
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
                            {
                                questions.map( question => <Text key={question.question}>{question.question}</Text>)
                            }
                        </View>
                    )
                })
            }
            <TouchableOpacity
                onPress={() => navigation.navigate('newDeck')}
                title='navList'
            >
                <Text>add new deck</Text>
            </TouchableOpacity>
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
    }
  })

export default DeckList