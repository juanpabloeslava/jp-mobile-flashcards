import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
// colors and icons
import { colors } from '../utils/colors'

const AnswerButton = (props) => {

    const { onPress, text, color } = props

    return (
        <TouchableOpacity
            onPress={onPress}
            style={ [ styles.button, { backgroundColor: color } ] }
        >
            <Text style={styles.submitBtnText}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        justifyContent: 'center',
        // minWidth: 100,
        height: 48,
        padding: 8,
        borderRadius: 4,
        overflow: 'hidden',
        margin: 16
    },
    submitBtnText: {
        color: colors.white,
        textAlign: 'center'
    }
})

export default AnswerButton;