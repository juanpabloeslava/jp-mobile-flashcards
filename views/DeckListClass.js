import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
// colors and icons
import { colors } from '../utils/colors'
// redux stuff
import { connect } from 'react-redux'
import { receiveDecksAsync } from '../actions'

class DeckListClass extends Component {
    
componentDidMount () {
    const { dispatch } = this.props
    // get all decks from AsyncStore and put them in the state
    dispatch(receiveDecksAsync())
}

render() {

    const { decks, navigation } = this.props
    console.log(decks)
    return (
        <View style={styles.container}>
            <Text>deck list class comp</Text> 
        </View>
    );
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    question: {
        marginBottom: 16
    },
    viewDeckText: {
        color: colors.blue,
        margin: 16
    }
})

const mapStateToProps = ({ decks }) => {
    return decks
}

export default connect(mapStateToProps)(DeckListClass);