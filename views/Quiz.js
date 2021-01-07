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
import AnswerButton from '../components/AnswerButton'

const Quiz = (props) => {

    const { navigation } = props
    const deckID = props.route.params.deckID

    // local state
    const [questionNumber, setQuestionNumber] = useState(0);        // 
    const [showAnswer, setShowAnswer] = useState(false);

    const decks = useSelector(state => state.decks)
    const deck = decks[deckID]

    const totalQuestions = deck.questions.length
    const displayNumber = questionNumber + 1
    const displayQuestions = totalQuestions === 1 ? 'Question' : 'Questions'

    const question = deck.questions[questionNumber].question
    const answer = deck.questions[questionNumber].answer
    const correctAnswer = deck.questions[questionNumber].correctAnswer

    // functions
    const submitAnswer = () => {

    }

    return (
        <View style={styles.container}>
            <View style={styles.quiz}>
                <Text style={styles.questionCount}> {`${displayNumber} / ${totalQuestions} ${displayQuestions}`} </Text>
                <Text style={styles.title}>
                    {question}
                </Text>
                <ActionButton
                    onPress={() => setShowAnswer(!showAnswer)}
                    text={showAnswer === true ? 'Hide Answer' : 'Show Answer'}
                    color={colors.blue}
                />
                {showAnswer === true
                    ? <View>
                        <Text style={styles.questionText}>{answer}</Text>
                        <View style={styles.buttonsContainer}>
                            <AnswerButton
                                onPress={() => console.log('correct')}
                                text='Correct'
                                color={colors.green}
                            />
                            <AnswerButton
                                onPress={() => console.log('incorrect')}
                                text='Incorrect'
                                color={colors.red}
                            />
                        </View>
                    </View>
                    : null
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16
    },
    quiz: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 16,
        backgroundColor: colors.white2,
        alignSelf: 'stretch',
        borderRadius: 8,
        shadowRadius: 8,
        shadowColor: 'rgba(0, 0, 0, 0.16)',
        shadowOffset: {
            width: 0,
            height: 3
        }

    },
    questionCount: {
        alignSelf: 'flex-start',
        position: 'absolute',
        left: 0,
        top: 0,
        margin: 16
    },
    title: {
        fontSize: 24,
        color: colors.blue,
        margin: 16
    },
    questionText: {
        fontSize: 22,
        margin: 16

    },
    buttonsContainer: {
        flexDirection: 'row'
    }
})

export default Quiz;