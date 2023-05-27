import { useState, useEffect } from 'react'; 
import { StyleSheet, View, Text, Image } from 'react-native';
import { useContext } from 'react';
import { ContextOBJ } from '../app/appcontext';
import { BottomSheet } from '@rneui/themed';

// import Bottom Sheets
import Location from '../components/Location';
import Form from '../components/Form';
import Login from '../components/Login';
import Register from '../components/Register';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../app/firebase';

export default function Index({ navigation }){
    const { isLoggedIn, setIsLoggedIn, visible, setVisible  } = useContext(ContextOBJ)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setIsLoggedIn(true)
                navigation.navigate('Home')
            } else {
                setIsLoggedIn(false)
            }
        })
    }, [])

    const [ tab, setTab ] = useState('location')
    return(
        <>
            <View style={styles.home_container}>
                <View style={styles.header}>
                    
                </View>


                <BottomSheet isVisible={visible} containerStyle={{background: 'red'}}>
                    {
                        tab === 'location' ? (
                            <Location set={setTab}/>
                        ) : tab === 'form' ? (
                            <Form set={setTab}/>
                        ) : tab === 'login' ? (
                            <Login set={setTab} setVisible={setVisible} navigation={navigation}/>
                        ) : tab === 'register' ? (
                            <Register set={setTab} setVisible={setVisible} navigation={navigation}/>
                        ) : null
                    }
                </BottomSheet>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    home_container:{
        height: '100%',
        width: '100%',
        backgroundColor: '#19A7CE'
    },
    logo_container: {

    }, 
    header: {

    }
})