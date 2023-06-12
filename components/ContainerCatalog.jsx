import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native'
import { Icon, BottomSheet } from '@rneui/themed'
import ContainerCatalogTab from './ContainerCatalogTab'

const ContainerCatalog = ({ visibility, setVisibility, navigation }) => {
    const [ search, setSearch ] = useState('')

    const [ tabVisibility, setTabVisibility ] = useState(false)

    const [ data, setData ] = useState({})
  return (
    <>
        <BottomSheet isVisible={visibility} containerStyle={{background: 'red'}}>
            <View style={styles.container}>
            <View style={styles.header}>
                    <Icon type="material" onPress={() => setVisibility(false)} name="chevron-left" size={45} color={'#FFF'} style={{
                        textAlign: 'left',
                        display: 'flex',
                    }}/>

                    <Text style={{
                        textAlign: 'center',
                        fontSize: 25,
                        color: '#FFF',
                        fontWeight: 'semibold'
                    }}>
                        Container Catalog
                    </Text>
                </View>

                <View style={styles.searchBar}>
                    <Icon type="material" name="search" size={30} color={'#146C94'} style={{marginRight: 10}}/>
                    <TextInput placeholder="Search" onChange={(e) => setSearch(e)}/>
                </View>

                <View style={styles.items_container}>
                    <View style={styles.items}>
                        <View style={{
                            marginRight: 20,
                        }}>
                            <Image 
                                source={{
                                    uri: 'https://firebasestorage.googleapis.com/v0/b/aqua-360.appspot.com/o/app%2FDispenser.png?alt=media&token=fb992fac-a2c4-4f0e-aa30-52fd3d06de06'
                                }}
                                style={{
                                    height: 89,
                      width: 79,
                      position: 'relative',
                                }}
                            />
                        </View>

                        <View style={{
                            width: '60%'
                        }}>
                            <View>
                                <Text style={{fontSize: 16, color: '#146C94', fontWeight: 'bold'}}>Large Container</Text>  
                                <Text style={{fontSize: 13, color: '#146C94', marginBottom: 10, fontWeight: 'semibold'}}>30L</Text>  
                        
                            </View>

                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'flex-end',
                                justifyContent: 'space-between',
                            }}>
                                <Text style={{fontSize: 20, color: '#146C94', marginBottom: 10, fontWeight: 'semibold'}}>₱100</Text>
                                <TouchableOpacity 
                                style={{
                                    height: 40,
                                    width: 40,
                                    borderRadius: 20,
                                    backgroundColor: '#DFF0FE',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                onPress={() => {
                                    setTabVisibility(true)
                                    setData({
                                        name: 'Large Container',
                                        price: 100,
                                        size: '30L',
                                        img: 'https://firebasestorage.googleapis.com/v0/b/aqua-360.appspot.com/o/app%2FDispenser.png?alt=media&token=fb992fac-a2c4-4f0e-aa30-52fd3d06de06',
                                        quantity: 1
                                    })
                                }}
                                >
                                    <Icon name='add' size={30} color={'#146C94'}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styles.items}>
                        <View style={{
                            marginRight: 20,
                        }}>
                            <Image 
                                source={{
                                    uri: 'https://firebasestorage.googleapis.com/v0/b/aqua-360.appspot.com/o/app%2FDispenser.png?alt=media&token=fb992fac-a2c4-4f0e-aa30-52fd3d06de06'
                                }}
                                style={{
                                    height: 89,
                      width: 79,
                      position: 'relative',
                                }}
                            />
                        </View>

                        <View style={{
                            width: '60%'
                        }}>
                            <View>
                                <Text style={{fontSize: 16, color: '#146C94', fontWeight: 'bold'}}>Medium Container</Text>  
                                <Text style={{fontSize: 13, color: '#146C94', marginBottom: 10, fontWeight: 'semibold'}}>15L</Text>  
                        
                            </View>

                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'flex-end',
                                justifyContent: 'space-between',
                            }}>
                                <Text style={{fontSize: 20, color: '#146C94', marginBottom: 10, fontWeight: 'semibold'}}>₱50</Text>
                                <TouchableOpacity 
                                style={{
                                    height: 40,
                                    width: 40,
                                    borderRadius: 20,
                                    backgroundColor: '#DFF0FE',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                onPress={() => {
                                    setTabVisibility(true)
                                    setData({
                                        name: 'Medium Container',
                                        price: 50,
                                        size: '15L',
                                        img: 'https://firebasestorage.googleapis.com/v0/b/aqua-360.appspot.com/o/app%2FDispenser.png?alt=media&token=fb992fac-a2c4-4f0e-aa30-52fd3d06de06',
                                        quantity: 1
                                    })
                                }}
                                >
                                    <Icon name='add' size={30} color={'#146C94'}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styles.items}>
                        <View style={{
                            marginRight: 20,
                        }}>
                            <Image 
                                source={{
                                    uri: 'https://firebasestorage.googleapis.com/v0/b/aqua-360.appspot.com/o/app%2FDispenser.png?alt=media&token=fb992fac-a2c4-4f0e-aa30-52fd3d06de06'
                                }}
                                style={{
                                    height: 89,
                      width: 79,
                      position: 'relative',
                                }}
                            />
                        </View>

                        <View style={{
                            width: '60%'
                        }}>
                            <View>
                                <Text style={{fontSize: 16, color: '#146C94', fontWeight: 'bold'}}>Small Container</Text>  
                                <Text style={{fontSize: 13, color: '#146C94', marginBottom: 10, fontWeight: 'semibold'}}>7L</Text>  
                        
                            </View>

                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'flex-end',
                                justifyContent: 'space-between',
                            }}>
                                <Text style={{fontSize: 20, color: '#146C94', marginBottom: 10, fontWeight: 'semibold'}}>₱25</Text>
                                <TouchableOpacity 
                                style={{
                                    height: 40,
                                    width: 40,
                                    borderRadius: 20,
                                    backgroundColor: '#DFF0FE',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                onPress={() => {
                                    setTabVisibility(true)
                                    setData({
                                        name: 'Small Container',
                                        price: 25,
                                        size: '7L',
                                        img: 'https://firebasestorage.googleapis.com/v0/b/aqua-360.appspot.com/o/app%2FDispenser.png?alt=media&token=fb992fac-a2c4-4f0e-aa30-52fd3d06de06',
                                        quantity: 1
                                    })
                                }}
                                >
                                    <Icon name='add' size={30} color={'#146C94'}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </View>
            </View>

            <ContainerCatalogTab setVisibility={setTabVisibility} visibility={tabVisibility} data={data} setData={setData}/>
        </BottomSheet>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        height: 800,
        width: '100%',
        backgroundColor: '#19A7CE',
        
    },
    header: {
        display: 'flex',
        width: '74%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    }, 
    items: {
        width: '100%',
        padding: 10,
        backgroundColor: '#B0DAFF',
        marginBottom: 25,
        borderRadius: 25,

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    items_container: {
        marginTop: 20,
        marginHorizontal: 33,
    },
    searchBar: {
        marginTop: 10, 
        borderColor: "#B0DAFF", // Same color as border
        backgroundColor: '#B0DAFF',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1, // Create border
        borderRadius: 29, // Not needed. Just make it look nicer.
        padding: 3, // Also used to make it look nicer
        zIndex: 0, // Ensure border has z-index of 0
        marginBottom: 20,

        borderWidth: 2,
        borderBottomWidth: 2,

        marginHorizontal: 20,
    },
  })

export default ContainerCatalog