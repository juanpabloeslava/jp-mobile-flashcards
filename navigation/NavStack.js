// navigation
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// react 
import React from 'react'
// components
import DeckList from '../views/DeckList'
import NewDeck from '../views/NewDeck';
import Deck from '../views/Deck';


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
                <Stack.Screen
                    name="deck"
                    component={Deck}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavStack
