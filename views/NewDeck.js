import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
// colors and icons
import { white } from '../utils/colors'
// reducers and actions
import { useDispatch, useSelector } from 'react-redux'
import { addDeck } from '../actions'
// data
import { saveDeckTitle } from '../utils/helpers' 

const NewDeck = ({ navigation }) => {

    // local state and dispatch
    const [deckTitle, setDeckTitle] = useState('')
    const dispatch = useDispatch()

    // functions
    const handleChangeText = (text) => {
        setDeckTitle(text)
    }

    const submitDeck = () => {
        console.log('deck was submitted')
        // save deck to AsyncStorage
        saveDeckTitle(deckTitle)
        // save deck to store
        dispatch(addDeck(deckTitle))
    }

    return (
        <View style={styles.container}>
            <Text>Deck title:</Text>
            <TextInput
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
            <TouchableOpacity
                onPress={() => navigation.navigate('deckList')}
                title='navList'
            >
                <Text>go to list</Text>
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
  })

export default NewDeck