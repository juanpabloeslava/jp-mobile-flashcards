import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, KeyboardAvoidingView, View } from 'react-native'
// navigation
import { CommonActions } from '@react-navigation/native'
// colors and icons
import { colors } from '../utils/colors'
// reducers and actions
import { useDispatch } from 'react-redux'
import { addCardAsync } from '../actions'
// comps
import ActionButton from '../components/ActionButton'


const AddCard = (props) => {

    
    // local state and dispatch
    const dispatch = useDispatch()
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [correctAnswer, setCorrectAnswer] = useState('');
    
    // current deck
    const { navigation } = props
    const currentDeck = props.route.params.deckID
    console.log('current deck id in add new card: ', currentDeck)

    // functions
    const handleChangeQuestion = text => setQuestion(text)
    const handleChangeAnswer = text => setAnswer(text)
    const handleChangeCorrectAnswer = text => setCorrectAnswer(text)

    const submitCard = () => {
        console.log('card was submitted')
        const card = { question, answer, correctAnswer }
        // dispatch async action
        dispatch(addCardAsync(currentDeck, card))
        // clear state
        setQuestion('')
        setAnswer('')
        setCorrectAnswer('')
        // go to deck
        navigation.dispatch(CommonActions.goBack())
    }

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <Text>
                Question
            </Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={question}
                    onChangeText={handleChangeQuestion}
                />
            </View>
            <Text>
                Answer
            </Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={answer}
                    onChangeText={handleChangeAnswer}
                />
            </View>
            <Text>
                Correct Answer (true or false)
            </Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={correctAnswer}
                    onChangeText={handleChangeCorrectAnswer}
                />
            </View>
            <ActionButton 
                onPress={submitCard}
                text='Submit card'
                color={colors.blue}
            />
        </KeyboardAvoidingView>
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