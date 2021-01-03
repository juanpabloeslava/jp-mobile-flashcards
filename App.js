// yarn add @react-native-async-storage/async-storage
// yarn add redux react-redux
// yarn add @react-navigation/native @react-navigation/stack
// yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
// yarn add @react-navigation/material-bottom-tabs react-native-paper
// yarn add @react-navigation/material-top-tabs react-native-tab-view

// navigation
import NavStack from './navigation/NavStack'
import TabNavigation from './navigation/TabNavigation';
// others 
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// colors and icons
import { white } from './utils/colors'
// redux
import { Provider } from 'react-redux'
import store from './store'
// views and components 
import DeckList from './views/DeckList'
import NewDeck from './views/NewDeck'


export default function App() {
  return (
    <Provider store={store} >
        <StatusBar style="auto" />
        {/* <NavStack /> */}
        {/* <TabNavigation /> */}
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navContainer: {
    flex: 1
  }
})
