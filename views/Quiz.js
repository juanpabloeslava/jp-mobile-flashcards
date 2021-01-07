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
    const [answersRigth, setAnswersRigth] = useState(0);
    const [answersWrong, setAnswersWrong] = useState(0);

    const decks = useSelector(state => state.decks)
    const deck = decks[deckID]

    const totalQuestions = deck.questions.length
    const displayNumber = questionNumber + 1
    const displayQuestions = totalQuestions === 1 ? 'Question' : 'Questions'

    const question = deck.questions[questionNumber].question
    const answer = deck.questions[questionNumber].answer
    const correctAnswer = deck.questions[questionNumber].correctAnswer.toLowerCase()

    // functions
    const submitAnswer = answer => {
        console.log('submititng')

        if ( displayNumber < totalQuestions) {
            // check answer
            if (answer === correctAnswer) {
                setAnswersRigth(answersRigth + 1)
                console.log('answer was rigth')
            }
            else {
                setAnswersWrong(answersWrong + 1)
                console.log('answer was wrong')
            }
            setQuestionNumber(questionNumber + 1)
            setShowAnswer(false)
        }
    }
    
    const showPreviousAnswers = answersRigth !== 0 ? `${answersRigth} / ${totalQuestions} ${displayQuestions} right` : null

    return (
        <View style={styles.container}>
            <View style={styles.quiz}>
                <View style={styles.countersContainer}>
                    <Text style={styles.questionCount}> {`Question number: ${displayNumber}`} </Text>
                    <Text style={styles.answerCount}> 
                        {showPreviousAnswers}
                    </Text>
                </View>
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
                                // onPress={() => console.log('correct')}
                                onPress={() => submitAnswer('true')}
                                text='Correct'
                                color={colors.green}
                            />
                            <AnswerButton
                                // onPress={() => console.log('incorrect')}
                                onPress={() => submitAnswer('false')}
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
        justifyContent: 'center'
    },
    quiz: {
        flex: 1,
        padding: 12,
        margin: 12,
        justifyContent: 'center',
        alignItems: 'center',
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
    countersContainer: {
        alignSelf: 'flex-start',
        justifyContent: 'flex-start',
        position: 'absolute',
        left: 0,
        top: 0,
        margin: 12
    },
    questionCount: {
        // alignSelf: 'flex-start',
        // position: 'absolute',
        // left: 0,
        // top: 0,
        // margin: 4
    },
    answerCount: {
        // alignSelf: 'flex-start',
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // margin: 4
    },
    title: {
        fontSize: 20,
        color: colors.blue,
        margin: 16
    },
    questionText: {
        fontSize: 18,
        margin: 16

    },
    buttonsContainer: {
        flexDirection: 'row'
    }
})

export default Quiz;