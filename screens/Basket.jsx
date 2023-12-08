import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView, RefreshControl } from 'react-native'
import { Icon, BottomSheet, Button } from '@rneui/themed'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, getBasket, pay } from '../app/firebase'
import { getUserByUID } from '../app/firebase'
import AddressForm from '../components/AddressForm'

const Basket = ({ visibility, setVisibility, navigation }) => {
    const [ search, setSearch ] = useState('')
    const [ basket, setBasket ] = useState([])
    const [refreshing, setRefreshing] = useState(false);
    const [ addressVisibility, setAddressVisibility ] = useState(false)
    const [ user, setUser ] = useState(null)
    const [ opt, setOpt ] = useState('')
    const [ id, setId ] = useState('')

    const [ cardNumber, setCardNumber ] = useState('')
    const [ cardExpiry, setCardExpiry ] = useState('')
    const [ cardCVC, setCardCVC ] = useState('')

    const [ address, setAddress ] = useState('')

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                getBasket(user?.uid, setBasket)
                getUserByUID(user?.uid, setUser)
                setId(user?.uid)
            }
        })
    }, [auth])

    const onRefresh = () => {
        setRefreshing(true);
        getBasket(user?.uid, setBasket)
        setRefreshing(false);
    }


    const Item = ({ name, price, size, img, quantity }) => (
        <View style={styles.items}>
            <View style={{
                marginRight: 20,
            }}>
                <Image 
                    source={{
                        uri: img
                    }}
                    style={{
                        height: 92,
                        width: 79,
                        position: 'relative',
                        top: 10,
                    }}
                />
            </View>

            <View style={{
                width: '60%'
            }}>
                <View>
                    <Text style={{fontSize: 16, color: '#146C94', fontWeight: 'bold'}}>{name}</Text>  
                    <Text style={{fontSize: 13, color: '#146C94', marginBottom: 10, fontWeight: 'semibold'}}>{size}</Text>  
            
                </View>

                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                }}>
                    <Text style={{fontSize: 20, color: '#146C94', marginBottom: 10, fontWeight: 'semibold'}}>₱{price}</Text>
                    <Text style={{fontSize: 20, color: '#146C94', marginBottom: 10, fontWeight: 'semibold'}}>Qty: {quantity}</Text>
                </View>
            </View>
        </View>
    )
  return (
    <>
    <View style={{flex: 1, backgroundColor: '#B0DAFF',}} >

        <ScrollView  refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Icon type="material" onPress={() => navigation.navigate("Home")} name="chevron-left" size={40} color={'#FFF'} style={{
                        textAlign: 'left',
                        display: 'flex',
                    }}/>
                </View>
                <View style={styles.cont}>
                    <View style={styles.cont_header}>
                        <Text style={{ color: '#146C94', fontWeight: 'bold', fontSize: 20 }}>Basket</Text>
                    </View>
                    
                    <View style={styles.items_container}>
                        {
                            basket.map((item, index) => {
                                return (
                                    <Item 
                                        key={index}
                                        name={item.name}
                                        price={item.price}
                                        size={item.size}
                                        img={item.img}
                                        quantity={item.quantity}
                                    />
                                )
                            })
                        }
                    </View>

                    {/* Delivery Location Section */}
                    <View style={styles.del_header}>
                        <Text style={{ color: '#146C94', fontWeight: 'bold', fontSize: 18 }}>Delivery</Text>
                    </View> 

                    <TouchableOpacity style={styles.items_container} onPress={() => setAddressVisibility(true)}>
                        <View style={styles.del_item}>
                            <Icon type="material" name="location-on" size={40} color={'#146C94'} style={{
                                textAlign: 'left',
                                display: 'flex',
                            }}/>
                            <Text style={{fontSize: 16, color: '#146C94', fontWeight: 'bold'}}>{user?.address}</Text>
                            <Icon type="material" name="chevron-right" size={40} color={'#146C94'} style={{
                                textAlign: 'right',
                                display: 'flex',
                            }}/>
                        </View>
                    </TouchableOpacity>
                    {/* Delivery Options Section */}
                    <View style={styles.del_header}>
                        <Text style={{ color: '#146C94', fontWeight: 'bold', fontSize: 18 }}>Delivery Options</Text>
                    </View> 

                    <View style={styles.items_container}>
                        <TouchableOpacity style={[styles.del_item, { padding: 20, marginBottom: 10, borderColor: opt == "standard" ? '#146C94' : '', borderWidth: opt == "standard" ? 3 : 0 }]} onPress={() => setOpt('standard')}>
                            <Text style={{fontSize: 16, color: '#146C94', fontWeight: 'semibold'}}>Standard {"< 20 Mins"}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.del_item, { padding: 20, marginBottom: 10, borderColor: opt == "later" ? '#146C94' : '', borderWidth: opt == "later" ? 3 : 0  }]} onPress={() => setOpt('later')}>
                            <Text style={{fontSize: 16, color: '#146C94', fontWeight: 'semibold'}}>Order for Later</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Payment Section */}
                    <View style={styles.del_header}>
                        <Text style={{ color: '#146C94', fontWeight: 'bold', fontSize: 18 }}>Payment Details</Text>
                    </View> 

                    <View style={styles.labelContainer}>
                        <Text style={{color: "#146C94", fontWeight: "bold",}}>Card Number</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon type="material" name="credit-card" size={25} color={'#146C94'} style={{marginRight: 10}}/>
                        <TextInput placeholder="Enter Card" onChangeText={(e) => setCardNumber(e)}/>
                    </View>

                    <View style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                    }}>
                        <View style={[styles.labelContainer, {
                            left: 90
                        }]}>
                            <Text style={{color: "#146C94", fontWeight: "bold",}}>CVV</Text>
                        </View>
                        <View style={[styles.inputContainer, {
                            width: '40%'
                        }]}>
                            <Icon type="material" name="credit-card" size={25} color={'#146C94'} style={{marginRight: 10}}/>
                            <TextInput placeholder="Enter Card" onChangeText={(e) => setCardCVC(e)}/>
                        </View>


                        <View style={[styles.labelContainer, {
                            left: 90
                        }]}>
                            <Text style={{color: "#146C94", fontWeight: "bold",}}>Expiration Date</Text>
                        </View>
                        <View style={[styles.inputContainer, {
                            width: '40%'
                        }]}>
                            <Icon type="material" name="credit-card" size={25} color={'#146C94'} style={{marginRight: 10}}/>
                            <TextInput placeholder="Enter Card" onChangeText={(e) => setCardExpiry(e)}/>
                        </View>

                    </View>
                </View>

            </View>
                    
        </ScrollView>
        <View style={styles.bot}>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: 20,
                marginBottom: 20,
            }}>
                <Text style={{fontSize: 16, color: '#fff', fontWeight: 'bold'}}>Total</Text>
                <Text style={{fontSize: 16, color: '#fff', fontWeight: 'bold'}}>₱{basket.reduce((a, b) => a + (b['price'] * b['quantity']), 0)}</Text>
            </View>
            
            <Button 
            onPress={() => {
                const cardDetails = {
                    number: cardNumber,
                    cvc: cardCVC,
                    exp: cardExpiry,
                }
                pay(id, address, opt, cardDetails)

                setOpt('')
                setCardNumber('')
                setCardCVC('')
                setCardExpiry('')
                setAddress('')
                setBasket([])
                navigation.navigate('Activity')
            }} 
            title={'Pay Now'} 
            containerStyle={styles.button} 
            buttonStyle={{backgroundColor: '#146C94'}}/>  
        </View>
    </View>

    <AddressForm visibility={addressVisibility} setVisibility={setAddressVisibility} navigation={navigation} setAddress={setAddress}/>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingBottom: 100,
        // height: 700,
        width: '100%',
        backgroundColor: '#19A7CE',
        display: 'flex',
        flex: 1,
        
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        marginHorizontal: 20,
    }, 
    items: {
        width: '100%',
        padding: 10,
        backgroundColor: '#18A9CE',
        marginBottom: 25,
        borderRadius: 25,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    items_container: {
        marginTop: 20,
        marginHorizontal: 20,
    },
    cont: {
        backgroundColor: '#B0DAFF',
        padding: 20,
        // height: 700,
        borderTopLeftRadius: 27,
        borderTopRightRadius: 27,
        zIndex: 1,
        // top: 70,
    },
    cont_header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        marginHorizontal: 20,
    },  
    bot: {
        backgroundColor: '#19A7CE',
        padding: 20,
        height: 120,
        borderTopLeftRadius: 27,
        borderTopRightRadius: 27,
        // top: -20,
        left: 0, 
        right: 0, 
        bottom: 0,
        zIndex: 2,
        position: 'absolute',
    },
    button: {
        color: 'white',
        width: '100%',
        textAlign: 'center',
        borderRadius: 10,
        marginBottom: 10
    },
    del_header: {
        marginTop: 20,
    },
    del_item: {
        width: '100%',
        padding: 10,
        backgroundColor: '#EBF5FF',
        marginBottom: 25,
        borderRadius: 25,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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
        position: "relative", 
        top: 8,
        left: 30, 
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
  })


export default Basket