import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
// colors and icons
import { colors } from '../utils/colors'
// reducers and actions
import { useDispatch } from 'react-redux'
import { addDeckAsync } from '../actions'
// comps
import ActionButton from '../components/ActionButton'

const AddDeck = (props) => {

    const { navigation } = props
    // local state and dispatch
    const [deckTitle, setDeckTitle] = useState('')
    const dispatch = useDispatch()

    // functions
    const handleChangeText = (text) => {
        setDeckTitle(text)
    }

    const submitDeck = () => {
        // dispatch async action
        dispatch(addDeckAsync(deckTitle))
        // clear state
        setDeckTitle('')
        // go to the new deck's view
        navigation.navigate('Deck', { deckID: deckTitle })
    }

    return (
        <View style={styles.container}>
            <Text
            // style={styles.title}
            >
                Deck title:
            </Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={handleChangeText}
                    value={deckTitle}
                />
            </View>
            <ActionButton 
                onPress={submitDeck}
                text='Action Submit'
                color={colors.blue}
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
    inputContainer: {
        height: 48,
        width: '100%',
        margin: 16,
    },
    input: {
        flex: 1,
        padding: 8,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: colors.lightGray,
        marginLeft: 16,
        marginRight: 16,
    },
    title: {
        fontSize: 24,
        color: colors.blue
    },
    submitBtn: {
        justifyContent: 'center',
        minWidth: 220,
        height: 48,
        backgroundColor: colors.blue,
        padding: 8,
        borderRadius: 4,
        overflow: 'hidden',
    },
    submitBtnText: {
        color: colors.white,
        textAlign: 'center'
    }

})

export default AddDeck