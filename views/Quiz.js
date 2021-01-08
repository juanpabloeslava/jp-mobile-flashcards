// navigation
import { CommonActions } from '@react-navigation/native'
// react and react native
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
// colors and icons
import { colors } from '../utils/colors'
// redux
import { useSelector } from 'react-redux'
// comps
import ActionButton from '../components/ActionButton'
import AnswerButton from '../components/AnswerButton'

const Quiz = (props) => {

    const { navigation } = props
    const deckID = props.route.params.deckID

    // local state
    const [questionNumber, setQuestionNumber] = useState(0)
    const [showAnswer, setShowAnswer] = useState(false)
    const [answersRigth, setAnswersRigth] = useState(0)
    const [answersWrong, setAnswersWrong] = useState(0)
    const [resultsPage, setResultsPage] = useState(false)

    // decks from store
    const decks = useSelector(state => state.decks)
    const deck = decks[deckID]

    // show progress
    const totalQuestions = deck.questions.length
    const displayNumber = questionNumber + 1
    const displayQuestions = totalQuestions === 1 ? 'Question' : 'Questions'

    // question info
    const question = deck.questions[questionNumber].question
    const answer = deck.questions[questionNumber].answer
    const correctAnswer = deck.questions[questionNumber].correctAnswer

    // functions
    const submitAnswer = answer => {
        // check answer
        (answer === correctAnswer) 
            ? (setAnswersRigth(answersRigth + 1)) 
            : (setAnswersWrong(answersWrong + 1))
        // go to next question or results page
        if ( displayNumber !== totalQuestions ) {
            setQuestionNumber(questionNumber + 1)
            setShowAnswer(false)
        }
        else { setResultsPage(true) }
    }

    const playAgain = () => {
        // reset everything
        setQuestionNumber(0)
        setAnswersRigth(0)
        setAnswersWrong(0)
        setShowAnswer(false)
        setResultsPage(false)
    }

    const goToDeck = () => navigation.dispatch(CommonActions.goBack())

    if (resultsPage === true) {
        return (
            <View style={styles.container}>
                <View 
                style={[styles.quiz, answersRigth > answersWrong ? {backgroundColor: colors.green} : {backgroundColor: colors.red}]}
                >
                    {
                        answersRigth > answersWrong 
                            ? <Text style={styles.resultsText}>Congratulations!</Text>
                            : <Text style={styles.resultsText}>It seems you need to study a bit more</Text>
                    }
                    <Text style={styles.resultsText}>
                        { ` You got ${answersRigth} / ${totalQuestions} ${displayQuestions} right` }
                    </Text>
                    <ActionButton
                        onPress={playAgain}
                        text='Take the Quiz again'
                        color={colors.blue}
                    />
                    <ActionButton
                        onPress={goToDeck}
                        text='Back to Deck'
                        color={colors.purple}
                    />
                    <View style={styles.buttonsContainer}>
                    </View>
                </View>
            </View>
        )
    }
    else {
        return (
            <View style={styles.container}>
                <View style={styles.quiz}>
                    <View style={styles.countersContainer}>
                        <Text> {`Question number: ${displayNumber}`} </Text>
                        <Text>
                            {
                                answersRigth !== 0 ? `${answersRigth} / ${totalQuestions} ${displayQuestions} right` : null
                            }
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
                                    onPress={() => submitAnswer(true)}
                                    text='Correct'
                                    color={colors.green}
                                />
                                <AnswerButton
                                    onPress={() => submitAnswer(true)}
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
    },
    resultsText: {
        fontSize: 18,
        color: colors.white,
        marginBottom: 8
    }
})

export default Quiz;