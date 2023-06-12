import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native'
import { Icon, BottomSheet } from '@rneui/themed'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, addToBasket } from '../app/firebase'

const ContainerCatalogTab = ({ visibility, setVisibility, navigation, data, setData }) => {
    const [qty, setQty] = useState(1)
    const [uid, setUid] = useState('')

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setUid(user.uid)
            }
        })
    }, [])


  return (
    <>
        <BottomSheet isVisible={visibility} onBackdropPress={() => setVisibility(false)} backdropStyle={{opacity: 0}} containerStyle={{background: 'red'}}>
            <View style={styles.container}>
                <View>
                    <View style={styles.bar}></View>
                </View>

                <View style={styles.content}>
                    <Image 
                        source={{
                            uri: 'https://firebasestorage.googleapis.com/v0/b/aqua-360.appspot.com/o/app%2FDispenser.png?alt=media&token=fb992fac-a2c4-4f0e-aa30-52fd3d06de06'
                        }}
                        style={{
                            height: 161,
                            width: 157,
                            position: 'relative',
                        }}
                    />

                    <Text style={{fontSize: 27, fontWeight: 'semibold',color: '#B0DAFF', marginBottom: 5}}>{data?.name}</Text>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: '40%',
                        }}>
                            <Text style={{fontSize: 19, fontWeight: 'semibold',color: '#19A7CE', marginBottom: 5}}>{data?.size}</Text>
                            <Text style={{fontSize: 19, fontWeight: 'semibold',color: '#19A7CE', marginBottom: 5}}>₱{data?.price}</Text>
                        </View>

                    <View style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        marginTop: 30,

                    }}>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: 30,
                        }}>
                            <TouchableOpacity onPress={() => setQty(qty > 1 ? qty - 1 : 1)} style={{
                                height: 23,
                                width: 23,
                                borderRadius: 20,
                                backgroundColor: '#146C94',
                                borderColor: '#DFF0FE',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderWidth: 1,
                                marginRight: 10,
                            }}>
                                <Icon name="minus" type="material-community" color="#DFF0FE" size={20}/>
                            </TouchableOpacity>
                            <Text style={{fontSize: 19, fontWeight: 'semibold',color: '#B0DAFF', marginBottom: 5,marginRight: 10,}}>{qty}</Text>
                            <TouchableOpacity onPress={() => setQty(qty + 1)} style={{
                                height: 23,
                                width: 23,
                                borderRadius: 20,
                                backgroundColor: '#DFF0FE',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                
                            }}>
                                <Icon name="plus" type="material-community" color="#146C94" size={20}/>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={{
                            backgroundColor: '#B0DAFF',
                            padding: 10,
                            borderRadius: 10,
                            width: '100%',
                        }} onPress={() => {
                            const temp = data
                            temp.quantity = qty
                            setData(temp)
                            addToBasket(data, uid)
                            setQty(1)
                            setVisibility(false)
                        }}>
                            <Text style={{fontSize: 19, fontWeight: 'semibold',color: '#146C94', marginBottom: 5, textAlign: 'center'}}>Add to Basket</Text>
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
        backgroundColor: '#146C94',
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

export default ContainerCatalogTab