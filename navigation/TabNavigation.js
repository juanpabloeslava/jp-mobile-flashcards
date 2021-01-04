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

const Tabs = Platform.OS === 'ios'
    ? createBottomTabNavigator()
    : createMaterialBottomTabNavigator()

const TabNavigation = () => {
    return (
        <NavigationContainer>
            <Tabs.Navigator
                initialRouteName='Decks'
                activeColor={white}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => (
                        route.name === 'Decks'
                            ? <MaterialCommunityIcons name='cards' size={24} color={color} />
                            : route.name === 'Add new Deck'
                                ? <FontAwesome name='plus-square' size={24} color={color} />
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