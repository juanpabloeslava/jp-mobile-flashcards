// yarn add @react-native-async-storage/async-storage
// yarn add redux react-redux
// yarn add @react-navigation/native @react-navigation/stack
// yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
// yarn add @react-navigation/bottom-tabs
// yarn add @react-navigation/material-bottom-tabs react-native-paper
// yarn add @react-navigation/material-top-tabs react-native-tab-view
// yarn add redux-logger
// yarn add redux-thunk
// yarn add react-native-simple-radio-button

// expo install expo-notifications
// expo install expo-permissions

// navigation and comps
import TabNavigation from './navigation/TabNavigation'
import MyStatusBar from './components/MyStatusBar'
// React and React Native stuff
import React from 'react'
import { StyleSheet } from 'react-native'
// colors and icons
import { colors } from './utils/colors'
// redux
import { Provider } from 'react-redux'
import store from './store'
// notifications
import { setLocalNotification } from './utils/helpers'

export default class App extends React.Component {
  
  componentDidMount() {
    setLocalNotification()
  }
  
  render () {
    return (
      <Provider store={store} >
          {/* <MyStatusBar barStyle="light-content" backgroundColor={colors.blue} /> */}
          <MyStatusBar barStyle="light-content" backgroundColor={colors.blue}/>
          <TabNavigation />
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
