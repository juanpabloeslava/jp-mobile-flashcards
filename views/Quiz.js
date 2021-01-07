// navigation
import { CommonActions } from '@react-navigation/native'
// react and react native
import React, { useState } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
// colors and icons
import { colors } from '../utils/colors'
// reducers and actions
import { useDispatch } from 'react-redux'
import { addCardAsync } from '../actions'
// comps
import ActionButton from '../components/ActionButton'

const Quiz = () => {

    return (
        <View>
            <Text> Quiz view </Text>
        </View>
    )
}

export default Quiz;