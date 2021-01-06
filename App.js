// yarn add @react-native-async-storage/async-storage
// yarn add redux react-redux
// yarn add @react-navigation/native @react-navigation/stack
// yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
// yarn add @react-navigation/bottom-tabs
// yarn add @react-navigation/material-bottom-tabs react-native-paper
// yarn add @react-navigation/material-top-tabs react-native-tab-view
// yarn add redux-logger
// yarn add redux-thunk

// navigation
import TabNavigation from './navigation/TabNavigation';
// React and React Native stuff
import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native'
import Constants from 'expo-constants'
// colors and icons
import { colors } from './utils/colors'
// redux
import { Provider } from 'react-redux'
import store from './store'

function MyStatusBar ({backgroundColor, ...props})  {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default function App() {
  return (
    <Provider store={store} >
        <MyStatusBar barStyle="light-content" backgroundColor={colors.blue} />
        <TabNavigation />
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
