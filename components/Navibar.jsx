import React, { useContext } from 'react'
import { ContextOBJ } from '../app/appcontext'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Index from '../screens/Index'
import Activity from '../screens/Activity'
import Profile from '../screens/Profile'

import { Icon } from '@rneui/themed'


const Tab = createBottomTabNavigator()

const Navibar = () => {
    const { isLoggedIn } = useContext(ContextOBJ)
  return (
    <>
        <NavigationContainer>
            {
                <Tab.Navigator 
                    initialRouteName="Index"
                    screenOptions={{
                        headerShown: false,
                        tabBarStyle: {
                            display: isLoggedIn ? "flex" : "none",
                            height: 120,
                            borderTopRightRadius: 31,
                            borderTopLeftRadius: 31,
                        },
                        tabBarLabelStyle: { display: "none" },

                    }}
                >
                    <Tab.Screen name="Index" component={Index} options={{
                        tabBarStyle: {
                            display: "none"
                        },
                        tabBarButton: (props) => null,
                    }}/>
                    <Tab.Screen name="Home" component={Home} options={{
                        tabBarIcon : ({focused}) => (
                            <Icon type="material" name="home" size={40} color={focused ? '#146C94' : '#19A7CE'} style={{marginBottom: 10}}/>
                        )
                    }}/>
                    <Tab.Screen name="Activity" component={Activity} options={{
                        tabBarIcon : ({focused}) => (
                            <Icon type="material" name="notifications" size={40} color={focused ? '#146C94' : '#19A7CE'} style={{marginBottom: 10}}/>
                        )
                    }}/>
                    <Tab.Screen name="Profile" component={Profile} options={{
                        tabBarIcon : ({focused}) => (
                            <Icon type="material" name="person" size={40} color={focused ? '#146C94' : '#19A7CE'} style={{marginBottom: 10}}/>
                        )
                    }}/>
                    
                </Tab.Navigator>
            
            }
        </NavigationContainer>
    </>
  )
}

export default Navibar