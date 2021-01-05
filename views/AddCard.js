import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
// colors and icons
import { colors } from '../utils/colors'
// reducers and actions
// import { useDispatch, useSelector } from 'react-redux'
// import { addDeck, addDeckAsync } from '../actions'


const AddCard = (props) => {

    return (
        <View style={styles.container}>
            <Text>
                New Card:
            </Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                />
            </View>
            <ActionButton 
                onPress={ () => console.log('Submit card')}
                text='Submit card'
                color={colors.blue}

            />
            <TouchableOpacity
                onPress={submitDeck}
                title='submit'
                placeholder="Enter your deck's title"
            >
                <Text style={styles.submitBtnText}>submit</Text>
            </TouchableOpacity>
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
})

export default AddCard