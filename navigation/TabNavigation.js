// navigation
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


// react 
import React from 'react';
import { Platform } from 'react-native'
// colors and icons
import { white } from '../utils/colors'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
// components
import StackRegular from './StackRegular'
import StackNewDeck from './StackNewDeck'
import DeckList from '../views/DeckList'
import NewDeck from '../views/NewDeck'

const Tabs = Platform.OS === 'ios'
    ? createBottomTabNavigator()
    : createMaterialTopTabNavigator()

const TabNavigation = () => {
    return (
        <NavigationContainer>
            <Tabs.Navigator
                initialRouteName='Decks'
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ tintColor }) => (
                        route.name === 'Add new Deck'
                            ? <MaterialCommunityIcons name='cards' size={30} color={tintColor} />
                            : route.name === 'StackNewDeck'
                                ? <FontAwesome name='plus-square' size={30} color={tintColor} />
                                : null
                    )
                })}
            >
                <Tabs.Screen
                    name="Decks"
                    component={StackRegular}
                />
                <Tabs.Screen
                    name="Add new Deck"
                    component={StackNewDeck}
                />
            </Tabs.Navigator>
        </NavigationContainer>
    )
}

export default TabNavigation;