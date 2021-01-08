import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, KeyboardAvoidingView, View, Platform } from 'react-native'
// navigation
import { CommonActions } from '@react-navigation/native'
// colors and icons
import { colors } from '../utils/colors'
// reducers and actions
import { useDispatch } from 'react-redux'
import { addCardAsync } from '../actions'
// comps
import ActionButton from '../components/ActionButton'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button'

const AddCard = (props) => {


    // local state and dispatch
    const dispatch = useDispatch()
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')
    const [correctAnswer, setCorrectAnswer] = useState(true)
    // error handling
    const [questionRequired, setQuestionRequired] = useState(false)
    const [answerRequired, setAnswerRequired] = useState(false);

    // current deck
    const { navigation } = props
    const currentDeck = props.route.params.deckID

    // functions
    const handleChangeQuestion = text => setQuestion(text)
    const handleChangeAnswer = text => setAnswer(text)
    const handleChangeCorrectAnswer = value => setCorrectAnswer(value)

    const checkAnswer = () => {
        console.log('checking input on card')
        
        const questionNoWhitespace = question.replace(/\s/g, '')
        const answerNoWhitespace = answer.replace(/\s/g, '')
        
        let failed = false
        
        if (!questionNoWhitespace.length) {
            setQuestionRequired(true)
            failed = true
        } 
        else { setQuestionRequired(false) }

        if (!answerNoWhitespace.length) {
            setAnswerRequired(true)
            failed = true
        } 
        else { setAnswerRequired(false) }
        
        if (failed) return 
        
        submitCard()
    }

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

    const radio_props = [
        { label: 'Correct', value: true },
        { label: 'Incorrect', value: false }
    ]

    return (
        <KeyboardAvoidingView behavior={Platform.Os == 'ios' ? 'padding' : 'height'} style={styles.container}>
            <Text style={styles.title}>
                Question
            </Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={ questionRequired ? styles.inputError : styles.input }
                    value={question}
                    returnKeyType='next'
                    onChangeText={handleChangeQuestion}
                />
            </View>
            {questionRequired && (
                <Text style={styles.inputErrorText}>Please enter your question before submiting</Text>
            )}
            <Text style={styles.title}>
                Answer
            </Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={ answerRequired ? styles.inputError : styles.input }
                    value={answer}
                    onChangeText={handleChangeAnswer}
                />
            </View>
            {answerRequired && (
                <Text style={styles.inputErrorText}>Please enter your answer before submiting</Text>
            )}
            <Text style={[styles.title, {marginBottom:16}]}>
                Is this answer correct?
            </Text>
            <RadioForm
                radio_props={radio_props}
                initial={true}
                formHorizontal={true}
                labelHorizontal={false}
                onPress={handleChangeCorrectAnswer}
            />
            <ActionButton
                onPress={checkAnswer}
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
    title: {
        fontSize: 20,
        color: colors.blue,
        // margin: 8
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
    inputError: {
        flex: 1,
        padding: 8,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: colors.red,
        marginLeft: 16,
        marginRight: 16,
    },
    inputErrorText: {
        marginTop: -12,
        marginBottom: 20,
        color: colors.red,
        fontSize: 14,
    }
})

export default AddCard