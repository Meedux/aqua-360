import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native'
import { Icon, BottomSheet } from '@rneui/themed'

const AddressForm = ({ visibility, setVisibility, navigation, setAddress }) => {
    const [ house, setHouse ] = useState('')
    const [ city, setCity ] = useState('')
    const [ province, setProvince ] = useState('')
  return (
    <>
        <BottomSheet isVisible={visibility} containerStyle={{background: 'red'}}>
            <View style={styles.container}>
            <   View>
                    <View style={styles.bar}></View>
                </View>
                <View style={styles.header}>
                    <Icon type="material" onPress={() => setVisibility(false)} name="chevron-left" size={42} color={'#146C94'} style={{
                        textAlign: 'left',
                        display: 'flex',
                    }}/>

                    <Text style={{
                        textAlign: 'center',
                        fontSize: 20,
                        color: '#146C94',
                        fontWeight: 'bold'
                    }}>
                        Edit Location Details
                    </Text>
                </View>

                <View>
                    <View style={styles.labelContainer}>
                        <Text style={{color: "#146C94", fontWeight: "bold",}}>House No./Street</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon type="material" name="home" size={25} color={'#146C94'} style={{marginRight: 10}}/>
                        <TextInput placeholder="Enter House No. and Street Name" onChangeText={(e) => setHouse(e)}/>
                    </View>

                    <View style={styles.labelContainer}>
                        <Text style={{color: "#146C94", fontWeight: "bold",}}>City</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon type="material" name="location-city" size={25} color={'#146C94'} style={{marginRight: 10}}/>
                        <TextInput placeholder="Enter City" onChangeText={(e) => setCity(e)}/>
                    </View>

                    <View style={styles.labelContainer}>
                        <Text style={{color: "#146C94", fontWeight: "bold",}}>Province</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon type="material" name="landscape" size={25} color={'#146C94'} style={{marginRight: 10}}/>
                        <TextInput placeholder="Enter Province" onChangeText={(e) => setProvince(e)}/>
                    </View>
                </View>
            </View>

            <View style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
                width: '100%',
                backgroundColor: '#B0DAFF',
            }}>
                <TouchableOpacity onPress={() => {
                    setAddress(`${house}, ${city}, ${province}`)
                    setHouse('')
                    setCity('')
                    setProvince('')
                    setVisibility(false)
                }} style={{
                    backgroundColor: '#146C94',
                    padding: 10,
                    width: '100%',
                    borderRadius: 10,
                }}>
                    <Text style={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: 20,
                        fontWeight: 'bold'
                    }}>
                        SAVE DETAILS
                    </Text>
                </TouchableOpacity>
            </View>
        </BottomSheet >
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
        width: '83%',
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

export default AddressForm