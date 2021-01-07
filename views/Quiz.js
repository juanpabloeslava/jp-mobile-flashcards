// navigation
import { CommonActions } from '@react-navigation/native'
// react and react native
import React, { useState } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
// colors and icons
import { colors } from '../utils/colors'
// reducers and actions
import { useSelector, useDispatch } from 'react-redux'
import { addCardAsync } from '../actions'
// comps
import ActionButton from '../components/ActionButton'

const Quiz = (props) => {

    const { navigation } = props
    const deckID = props.route.params.deckID

    const decks = useSelector(state => state.decks)
    const deck = decks[deckID]
    console.log('decks from state in Quiz comp:', decks)
    console.log('quiz on deck:', deck)

    return (
        <View style={styles.container}>
            <Text> Quiz view </Text>
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
})

export default Quiz;