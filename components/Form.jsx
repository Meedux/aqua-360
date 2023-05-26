import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from '@rneui/themed'

const Form = ({ set }) => {
  return (
    <>
        <View style={styles.container}>
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
    }
})

export default Form