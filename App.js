// yarn add @react-native-async-storage/async-storage

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// views and components 
import DeckList from './views/DeckList'


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <DeckList />
    </View>
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
