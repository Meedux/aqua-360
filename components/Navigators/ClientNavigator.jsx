import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../../screens/Home'
import Activity from '../../screens/Activity'
import Profile from '../../screens/Profile'
import Basket from '../../screens/Basket'
import { Icon } from '@rneui/base'

const Client = createBottomTabNavigator()
const ClientNavigator = () => {
  return (
    <>
            <Client.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        height: 120,
                        borderTopRightRadius: 31,
                        borderTopLeftRadius: 31,
                        position: "absolute",
                    },
                    tabBarLabelStyle: { display: "none" },
                }}
            >

                <Client.Screen name="Home" component={Home} options={{
                tabBarIcon : ({focused}) => (
                    <Icon type="material" name="home" size={40} color={focused ? '#146C94' : '#19A7CE'} style={{marginBottom: 10}}/>
                ), 
                }}/>
                <Client.Screen name="Activity" component={Activity} options={{
                    tabBarIcon : ({focused}) => (
                        <Icon type="material" name="notifications" size={40} color={focused ? '#146C94' : '#19A7CE'} style={{marginBottom: 10}}/>
                    ),
                }}/>
                {/* Basket Tab but the Bottom Navigator is hidden */}
                <Client.Screen name="Basket" component={Basket} options={{
                    tabBarIcon : ({focused}) => (
                        <Icon type="material" name="shopping-cart" size={40} color={focused ? '#146C94' : '#19A7CE'} style={{marginBottom: 10}}/>
                        ),
                        tabBarStyle: {
                            display: "none"
                        },
                    tabBarButton: (props) => null,
                }}/>
                <Client.Screen name="Profile" component={Profile} options={{
                    tabBarIcon : ({focused}) => (
                        <Icon type="material" name="person" size={40} color={focused ? '#146C94' : '#19A7CE'} style={{marginBottom: 10}}/>
                    ),
                }}/>
            </Client.Navigator>
    </>
  )
}

export default ClientNavigator