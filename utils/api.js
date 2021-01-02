// initial data for decks and cards
// Each deck creates a new key on the object. Each deck has a title and a questions key. title is the title for the specific deck and questions is an array of questions and answers for that deck.
// correctAnswer was added to check easily if the answer is right or not
const initialData = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces',
                correctAnswer: 'true'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentWillMount lifecycle event',
                correctAnswer: 'false'
            }
        ]
    },
    JavaScript: {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.',
                correctAnswer: 'true'
            }
        ]
    }
}

export const getInitialData = () => {
    return initialData
}