import React from 'react'
import { StatusBar, View } from 'react-native'
import Constants from 'expo-constants'

const MyStatusBar = ({ backgroundColor, ...props }) => {
    return (
        <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    )
}

export default MyStatusBar