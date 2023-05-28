import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Icon, Button } from '@rneui/themed'
import { login } from '../app/firebase'

const Login = ({ set, navigation, setVisible }) => {
    
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    async function loginHandler(){
        const loginChecker = await login(email, password)
        if(loginChecker === false){
            alert('Invalid email or password')
            return
        }

        setVisible(false)
        navigation.navigate('Home')
    }

    return (
        <>
            
            <View style={styles.container}>
                <View>
                    <View style={styles.bar}></View>
                </View>
                <View style={styles.header}>
                    <Icon type="material" onPress={() => set('form')} name="chevron-left" size={45} color={'#146C94'} style={{
                        textAlign: 'left',
                        display: 'flex',
                    }}/>

                    <Text style={{
                        textAlign: 'center',
                        fontSize: 30,
                        color: '#146C94',
                        fontWeight: 'bold'
                    }}>
                        Log In
                    </Text>
                </View>

                <View>
                    
                    <View style={styles.labelContainer}>
                        <Text style={{color: "#146C94", fontWeight: "bold",}}>Email Address</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon type="material" name="email" size={25} color={'#146C94'} style={{marginRight: 10}}/>
                        <TextInput placeholder="Enter email address" onChangeText={(e) => setEmail(e)}/>
                    </View>

                    <View style={styles.labelContainer}>
                        <Text style={{color: "#146C94", fontWeight: "bold",}}>Password</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon type="material" name="lock" size={25} color={'#146C94'} style={{marginRight: 10}}/>
                        <TextInput placeholder="Enter password" secureTextEntry onChangeText={(e) => setPassword(e)}/>
                    </View>


                    <Button onPress={loginHandler} title={'LOG IN'} containerStyle={styles.button} buttonStyle={{backgroundColor: '#146C94'}} iconRight={<Icon  />}/>
                </View>
            </View>
        </>
      )
    }
    
    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#B0DAFF',
            padding: 20,
            height: 630,
            borderTopLeftRadius: 27,
            borderTopRightRadius: 27,
            zIndex: 4,
        },
        header: {
            display: 'flex',
            width: '63%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 30
        },
        button: {
            color: 'white',
            width: '100%',
            textAlign: 'center',
            borderRadius: 10,
            marginBottom: 10
        },

        labelContainer: {
            backgroundColor: "#B0DAFF", // Same color as background
            borderColor: "#146C94", // Same color as border
            alignSelf: "flex-start", // Have View be same width as Text inside
            paddingHorizontal: 3, // Amount of spacing between border and first/last letter
            marginStart: 10, // How far right do you want the label to start
            zIndex: 1, // Label must overlap border
            elevation: 1, // Needed for android
            shadowColor: "white", // Same as background color because elevation: 1 creates a shadow that we don't want
            position: "relative", // Needed to be able to precisely overlap label with border
            top: 8, // Vertical position of label. Eyeball it to see where label intersects border.
            left: 30, // Vertical position of label. Eyeball it to see where label intersects border.
        },
        inputContainer: {
            borderColor: "#146C94", // Same color as border
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1, // Create border
            borderRadius: 10, // Not needed. Just make it look nicer.
            padding: 8, // Also used to make it look nicer
            zIndex: 0, // Ensure border has z-index of 0
            marginBottom: 20,
    
            borderWidth: 2,
            borderBottomWidth: 2,
        },
        bar: {
            backgroundColor: '#146C94',
            height: 5,
            width: 50,
            borderRadius: 10,
            alignSelf: 'center',
            marginTop: 10,
            marginBottom: 10,
            top: -22,
            zIndex: 3,
        }
    })
    

export default Login