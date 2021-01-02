import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
// data
import { getInitialData } from '../utils/api' 

const DeckList = () => {

    const decks = getInitialData()
    console.log('decks: ', decks)

    return (
        <View>
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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    question: {
        marginBottom: '1rem'
    }
  })

export default DeckList