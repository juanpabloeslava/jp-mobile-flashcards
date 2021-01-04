// navigation
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// react 
import React from 'react'
// components
import NewDeck from '../views/NewDeck';


const Stack = createStackNavigator();


const StackNewDeck = () => {
    return (
            <Stack.Navigator>
                <Stack.Screen
                    name="Add Deck"
                    component={NewDeck}
                />
            </Stack.Navigator>
    )
}

export default StackNewDeck
