import React, { useContext, useEffect } from 'react'
import { ContextOBJ } from '../app/appcontext'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Index from '../screens/Index'
import Activity from '../screens/Activity'
import Profile from '../screens/Profile'
import Basket from '../screens/Basket'

import { Icon } from '@rneui/themed'

import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../app/firebase';

const Tab = createBottomTabNavigator()

const Navibar = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(ContextOBJ)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setIsLoggedIn(true)

            } else {
                setIsLoggedIn(false)
            }
        })
    }, [])
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
                            position: "absolute",
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
                    {/* Basket Tab but the Bottom Navigator is hidden */}
                    <Tab.Screen name="Basket" component={Basket} options={{
                        tabBarIcon : ({focused}) => (
                            <Icon type="material" name="shopping-cart" size={40} color={focused ? '#146C94' : '#19A7CE'} style={{marginBottom: 10}}/>
                        ),
                        tabBarStyle: {
                            display: "none"
                        },
                        tabBarButton: (props) => null,
                    }}/>
                    
                </Tab.Navigator>
            
            }
        </NavigationContainer>
    </>
  )
}

export default Navibar