import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon, Button } from '@rneui/themed'

const Location = ({ set }) => {
  return (
    <>
        <View style={styles.container}>
            <View>
                {/* Add some mini Designs here */}
            </View>

            <View style={styles.content}>
                <Icon type="material" name="map" size={63} color={'#146C94'} style={{
                    marginBottom: 10
                }}/>

                <Text style={{
                    fontSize: 16,
                    fontWeight: 'light',
                    textAlign: 'center',
                    marginBottom: 25,
                    color: '#19A7CE'
                }}>By allowing location access, we can easily track your given address and receive more accurate delivery.</Text>

                <Button onPress={() => set('form')} title={'Share my Current Location'} containerStyle={styles.button} buttonStyle={{backgroundColor: '#146C94'}}/>
            </View>

            <View>
                {/* Add some Mini Designs here */}
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
        margin: 30,
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
    }
})

export default Location