import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon, BottomSheet } from '@rneui/themed'

const ActivityHistory = ({ visibility, setVisibility, navigation }) => {
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
                        Activity History
                    </Text>
                </View>

                <View style={styles.items_container}>
                    <Text style={{fontSize: 16, color: '#fff', marginBottom: 10}}>Recent</Text>
                    <View style={styles.items}></View>
                    <View style={styles.items}></View>
                    <View style={styles.items}></View>
                </View>
            </View>
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
      width: '73%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 10,
      
  }, 
  items: {
      width: '100%',
      height: 73,
      backgroundColor: '#B0DAFF',
      marginBottom: 25,
      borderRadius: 10,
  },
  items_container: {
      marginTop: 30,
      marginHorizontal: 33,
  }
})

export default ActivityHistory