import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
// colors and icons
import { white } from '../utils/colors'
// reducers and actions
import { useDispatch, useSelector } from 'react-redux'
import { addDeck, addDeckAsync } from '../actions'
// data
// import { saveDeckTitle } from '../utils/helpers' 

const NewDeck = (props) => {

    const { navigation } = props
    // local state and dispatch
    const [deckTitle, setDeckTitle] = useState('')
    const dispatch = useDispatch()

    // functions
    const handleChangeText = (text) => {
        setDeckTitle(text)
    }

    const submitDeck = () => {
        console.log('deck was submitted: ', deckTitle)
        // dispatch async action
        dispatch(addDeckAsync(deckTitle))
        // clear state
        setDeckTitle('')
        // go to the new deck's view
        navigation.navigate('Deck', { deckID: deckTitle })
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