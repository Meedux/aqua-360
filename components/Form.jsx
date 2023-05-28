import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from '@rneui/themed'

const Form = ({ set }) => {
  return (
    <>
        <View style={styles.container}>
            <View>
                <View style={styles.bar}></View>
            </View>
            <View style={styles.content}>
                <Button onPress={() => set('register')} title={'Sign Up'} containerStyle={styles.button} buttonStyle={{backgroundColor: '#146C94'}}/>
                {/* Do a line between the two buttons */}
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'light',
                    textAlign: 'center',
                    marginBottom: 10,
                    color: '#19A7CE'
                }}>or</Text>

                <Button onPress={() => set('login')} title={'Login'} containerStyle={styles.button} buttonStyle={{backgroundColor: '#146C94'}}/>
            </View>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#B0DAFF',
        padding: 5,
        height: 270,
        borderTopLeftRadius: 27,
        borderTopRightRadius: 27,
    },
    content: {
        margin: 50,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        color: 'white',
        width: '100%',
        textAlign: 'center',
        borderRadius: 10,
        marginBottom: 10
    },
    bar: {
        backgroundColor: '#146C94',
        height: 5,
        width: 50,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 10,
        top: -5,
        zIndex: 3,
    }
})

export default Form