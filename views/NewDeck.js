import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
// actions
import { addDeck } from '../actions'
// data
import { saveDeckTitle } from '../utils/helpers' 

const NewDeck = () => {

    // local state
    const [deckTitle, setDeckTitle] = useState('');

    // functions
    const handleChangeText = (text) => {
        setDeckTitle(text)
    }

    const submitDeck = () => {
        console.log('deck was submitted')
    }

    return (
        <View style={styles.container}>
            <Text>Deck title:</Text>
            <TextInput 
                style={styles.input}
                onChangeText={handleChangeText}
                value={deckTitle}
            />
            <TouchableOpacity
                onPress={submitDeck}
                title='submit'
                placeholder="Enter your deck's title"
            >
                <Text>submit</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#d7d7d7',
        width: '100%',
        height: 48,
        margin: 32,
        borderRadius: 4,
        paddingHorizontal: 16,
        fontSize: 24,
        fontWeight:'300'
    }
  })

export default NewDeck