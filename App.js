// yarn add @react-native-async-storage/async-storage
// yarn add redux react-redux
// yarn add @react-navigation/native @react-navigation/stack
// yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

// navigation
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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
import NewDeck from './views/NewDeck';


const Stack = createStackNavigator();


export default function App() {
  return (
    <Provider store={store} >
        <StatusBar style="auto" />
        <NavigationContainer style={styles.container}>
          <Stack.Navigator>
            <Stack.Screen
              name="newDeck"
              component={NewDeck}
            />
            <Stack.Screen
              name="deckList"
              component={DeckList}
            />
          </Stack.Navigator>
        </NavigationContainer>
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
