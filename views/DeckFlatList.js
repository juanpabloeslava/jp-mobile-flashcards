import React, { useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
// colors and icons
import { colors } from '../utils/colors'
// redux
import { connect } from 'react-redux'       // couldn¡t make it work with useSelector(), had to use connect() instead 
import { receiveDecksAsync } from '../actions'


const DeckFlatList = (props) => {

    const { navigation, decks, dispatch } = props
    console.log('decks from connect state: ', decks)

    // on comp mount
    useEffect(() => {
        // get all decks from AsyncStore and put them in the state
        dispatch(receiveDecksAsync())
    }, [])

    // functions
    const renderDeckItem = ({ item }) => {

        const { title, questions } = item

        const cards = questions.length === 1 ? 'Card' : 'Cards'

        return (
            <TouchableOpacity
                // second arg in function: will be available in the comp in props.route.params.deckID
                onPress={() => navigation.navigate('Deck Details', { deckID: title })}
                style={styles.card}
            >
                <Text style={styles.title}> 
                    {title} 
                </Text>
                <Text>
                    {`${questions.length} ${cards}`}
                </Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={decks}
                renderItem={renderDeckItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 16,
    },
    title: {
        fontSize: 24,
        color: colors.blue,
        margin: 16
    },
    card: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: colors.white2,
        margin: 12,
        borderRadius: 8,
        height: 120,
        shadowRadius: 8,
        shadowColor: 'rgba(0, 0, 0, 0.16)',
        shadowOffset: {
            width: 0,
            height: 3
        }
    },
})

const mapStateToProps = ({ decks }) => {
    return {
        decks: Object.values(decks)
    }
}

export default connect(mapStateToProps)(DeckFlatList)