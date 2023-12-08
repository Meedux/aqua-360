import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Log from '../../screens/Log'
import Profile from '../../screens/Profile'
import { Icon } from '@rneui/base'

const Admin = createBottomTabNavigator()
const AdminNavigator = () => {
  return (
    <>
                <Admin.Navigator
                    initialRouteName="Log"
                    screenOptions={{
                        headerShown: false,
                        tabBarStyle: {
                            height: 70,
                            borderTopRightRadius: 31,
                            borderTopLeftRadius: 31,
                            position: "absolute",
                        },  
                        tabBarLabelStyle: { display: "none" },
                    }}
                >
                    <Admin.Screen name="Log" component={Log} options={{
                        tabBarIcon : ({focused}) => (
                            <Icon type="material" name="history" size={40} color={focused ? '#146C94' : '#19A7CE'} style={{marginBottom: 10}}/>
                        ),
                    }}/>s
                    <Admin.Screen name="Profile" component={Profile} options={{
                        tabBarIcon : ({focused}) => (
                            <Icon type="material" name="person" size={40} color={focused ? '#146C94' : '#19A7CE'} style={{marginBottom: 10}}/>
                        ),
                    }}/>
                </Admin.Navigator>
    </>
  )
}

export default AdminNavigator