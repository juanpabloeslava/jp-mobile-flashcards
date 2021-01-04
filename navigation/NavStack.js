// navigation
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// react 
import React from 'react';
import { StyleSheet } from 'react-native';
// colors and icons
import { white } from '../utils/colors'
// components
import DeckList from '../views/DeckList'
import NewDeck from '../views/NewDeck';


const Stack = createStackNavigator();


const NavStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="deckList"
                    component={DeckList}
                />
                <Stack.Screen
                    name="newDeck"
                    component={NewDeck}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavStack
