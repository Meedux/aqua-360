import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native'
import { Icon, BottomSheet } from '@rneui/themed'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, addToBasket } from '../app/firebase'

const LogDetails = ({ visibility, setVisibility, data}) => {
    console.log(data)
  return (
    <>
        <BottomSheet isVisible={visibility} containerStyle={{background: 'red'}}>
            <View style={styles.container}>
                <View>
                    <View style={styles.bar}></View>
                </View>
                <View style={styles.content}>   
                    <Text style={{fontSize: 27, fontWeight: 'semibold',color: '#19A7CE', marginBottom: 5}}>{data?.user?.name}</Text>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        // marginTop: 30,
                    }}>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'column',
                            // alignItems: 'center',
                            width: '100%',
                            marginBottom: 20,
                        }}>
                            <Text style={{fontSize: 19, fontWeight: 'semibold',color: '#19A7CE', marginBottom: 5}}><Text style={{fontWeight: 'bold'}}>Address:</Text>  {data?.address}</Text>
                            <Text style={{fontSize: 19, fontWeight: 'semibold',color: '#19A7CE', marginBottom: 5}}><Text style={{fontWeight: 'bold'}}>Total Price:</Text> ₱{data?.total}</Text>
                            <Text style={{fontSize: 19, fontWeight: 'semibold',color: '#19A7CE', marginBottom: 5}}><Text style={{fontWeight: 'bold'}}>Delivery Option: </Text> {data?.option}</Text>
                            <Text style={{fontSize: 19, fontWeight: 'semibold',color: '#19A7CE', marginBottom: 5}}><Text style={{fontWeight: 'bold'}}>Item Quantity: </Text> {data?.items?.length}</Text>
                        </View>
                        <TouchableOpacity 
                            style={{
                                width: '100%',
                                height: 50,
                                backgroundColor: '#19A7CE',
                                borderRadius: 10,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            onPress={() => {
                                setVisibility(false)
                            }}
                        >
                            <Text style={{fontSize: 19, fontWeight: 'semibold',color: '#B0DAFF'}}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </BottomSheet>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#B0DAFF',
        padding: 5,
        height: 500,
        borderTopLeftRadius: 27,
        borderTopRightRadius: 27,
    },
    content: {
        margin: 20,
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
        backgroundColor: '#B0DAFF',
        height: 5,
        width: 60,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 10,
        top: -5,
        zIndex: 3,
    }
})

export default LogDetails