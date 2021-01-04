import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
// colors and icons
import { white } from '../utils/colors'


const Deck = (props) => {
    
    const { navigation } = props
    const deck = props.route.params.deckID

    return (
        <View style={styles.container}>
            <Text> Deck Component:</Text>
            <Text>{deck}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: white,
      alignItems: 'center',
      justifyContent: 'center',
    }
  })
 
export default Deck;