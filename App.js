// yarn add @react-native-async-storage/async-storage
// yarn add redux react-redux
// yarn add @react-navigation/native @react-navigation/stack
// yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// redux
import { Provider } from 'react-redux'
import store from './store'
// views and components 
import DeckList from './views/DeckList'
import NewDeck from './views/NewDeck';


export default function App() {
  return (
    <Provider store={store} >
      <View style={styles.container}>
        <StatusBar style="auto" />
        {/* <DeckList /> */}
        <NewDeck />
      </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
