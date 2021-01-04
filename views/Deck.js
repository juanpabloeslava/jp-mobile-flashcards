import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
// colors and icons
import { white } from '../utils/colors'

const Deck = ({ navigation, entryId }) => {
    return (
        <View style={styles.container}>
            <Text> Deck Component: {entryId}</Text>
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