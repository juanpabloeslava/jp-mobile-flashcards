// navigation
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// react 
import React from 'react'
// components
import DeckList from '../views/DeckList'
import Deck from '../views/Deck';
import AddCard from '../views/AddCard';


const Stack = createStackNavigator();


const StackRegular = () => {
    return (
            <Stack.Navigator>
                <Stack.Screen
                    name="Decks"
                    component={DeckList}
                />
                <Stack.Screen
                    name="Deck"
                    component={Deck}
                />
                <Stack.Screen
                    name="AddCard"
                    component={AddCard}
                />
            </Stack.Navigator>
    )
}

export default StackRegular
