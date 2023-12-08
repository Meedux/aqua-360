import React, { useContext, useEffect, useState } from 'react'
import { ContextOBJ } from '../app/appcontext'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import AdminNavigator from './Navigators/AdminNavigator'
import ClientNavigator from './Navigators/ClientNavigator'
import Index from '../screens/Index'
import Profile from '../screens/Profile'

import { Icon } from '@rneui/themed'

import { onAuthStateChanged } from 'firebase/auth'
import { auth, getUserByUID } from '../app/firebase';

const Tab = createNativeStackNavigator()

const Navibar = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(ContextOBJ)
    const [ user, setUser ] = useState(null)

    useEffect(() => {
        onAuthStateChanged(auth, (userr) => {
            if(userr){
                setIsLoggedIn(true)
                getUserByUID(userr.uid, setUser)
            } else {
                setIsLoggedIn(false)
            }
        })
    }, [])
  return (
    <>
        <NavigationContainer>
                <Tab.Navigator 
                    initialRouteName="Index"
                    screenOptions={{
                        headerShown: false,
                        tabBarStyle: {
                            display: isLoggedIn ? "flex" : "none",
                            height: 120,
                            borderTopRightRadius: 31,
                            borderTopLeftRadius: 31,
                            position: "absolute",
                        },  
                        tabBarLabelStyle: { display: "none" },
                    }}
                > 
                    <Tab.Screen name="Index" component={Index}/>
                    <Tab.Screen name="Admin" component={AdminNavigator}/>
                    <Tab.Screen name="Client" component={ClientNavigator}/>
                </Tab.Navigator>
        </NavigationContainer>
    </>
  )
}

export default Navibar