import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { Tabs } from 'expo-router'
import TabBar from '../components/TabBar'

const TabLayout = () => {

    return (
        <Tabs tabBar={(props) => <TabBar {...props}/>}>
            <Tabs.Screen name='index' options={{title:"All",headerShown:false}}/>
            <Tabs.Screen name='pending' options={{title:"Pending",headerShown:false}}/>
            <Tabs.Screen name='completed' options={{title:"Completed",headerShown:false}}/>
        </Tabs>
    )
}


export default TabLayout