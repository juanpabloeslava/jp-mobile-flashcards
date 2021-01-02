import React from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
// data
import { saveDeckTitle } from '../utils/helpers' 

const NewDeck = () => {

    return (
        <View style={styles.container}>
            <Text> Add a new Deck View</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }
  })

export default NewDeck