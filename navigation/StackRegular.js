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
import DeckListClass from '../views/DeckListClass';
import DeckFlatList from '../views/DeckFlatList';


const Stack = createStackNavigator();


const StackRegular = () => {
    return (
            <Stack.Navigator>
                <Stack.Screen
                    name="Decks"
                    component={DeckFlatList}
                    // component={DeckList}
                    // component={DeckListClass}
                    options={{
                        headerShown: false
                    }}
                    
                />
                <Stack.Screen
                    name="Deck Details"
                    component={Deck}
                    options={{
                        headerShown: true
                    }}
                />
                <Stack.Screen
                    name="Add Card"
                    component={AddCard}
                    options={{
                        headerShown: true
                    }}
                />
            </Stack.Navigator>
    )
}

export default StackRegular
