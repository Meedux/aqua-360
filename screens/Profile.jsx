import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import { Icon } from '@rneui/base'

const Profile = () => {
  return (
    <>
      <ScrollView style={styles.profile_container}>
        <View style={styles.header}>
          <Icon name='account-circle' size={100} color={'#B0DAFF'} style={{marginRight: 20}}/>
          <View style={styles.header_text}>
            <Text style={{
              fontSize: 21,
              fontWeight: 'semibold',
              color: 'white'
            }}>User Name</Text>
            <Text style={{
              fontSize: 15,
              fontWeight: 'semibold',
              color: 'white'
            }}>User Number</Text>
          </View>
        </View>

        <View style={styles.my_account}>
          <Text style={styles.my_account_text}>My Account</Text>
          <TouchableOpacity style={styles.my_account_items}>
                <Text style={{
                  fontWeight: 'light',
                  color: '#B0DAFF',
                }}>Account Information</Text>
                <Icon name='chevron-right' size={35} color={'#B0DAFF'}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.my_account_items}>
                <Text style={{
                  fontWeight: 'light',
                  color: '#B0DAFF',
                }}>Settings</Text>
                <Icon name='chevron-right' size={35} color={'#B0DAFF'}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.my_account_items}>
                <Text style={{
                  fontWeight: 'light',
                  color: '#B0DAFF',
                }}>Activity & History</Text>
                <Icon name='chevron-right' size={35} color={'#B0DAFF'}/>
          </TouchableOpacity>
        </View>

        <View style={styles.general}>
          <Text style={styles.general_text}>General</Text>
            <TouchableOpacity style={styles.general_items}>
                  <Text style={{
                    fontWeight: 'light',
                    color: '#B0DAFF',
                  }}>Settings</Text>
                  <Icon name='chevron-right' size={35} color={'#B0DAFF'}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.general_items}>
                  <Text style={{
                    fontWeight: 'light',
                    color: '#B0DAFF',
                  }}>Share Feedback</Text>
                  <Icon name='chevron-right' size={35} color={'#B0DAFF'}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.general_items}>
                  <Text style={{
                    fontWeight: 'light',
                    color: '#B0DAFF',
                  }}>Log Out</Text>
                  <Icon name='chevron-right' size={35} color={'#B0DAFF'}/>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  profile_container: {
    width: '100%',
    backgroundColor: '#19A7CE',
  },
  header: {
    marginTop: 60,
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 33,
  },
  header_text: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  my_account: {
    marginTop: 30,
    marginHorizontal: 33,
  },
  my_account_text: {
    fontSize: 20,
    fontWeight: 'semibold',
    color: 'white',
    marginBottom: 20,
  },
  my_account_items: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#B0DAFF',
    borderBottomWidth: 1,
    paddingBottom: 2,
    marginBottom: 10,
  },
  general: {
    marginTop: 30,
    marginHorizontal: 33,
  },
  general_text: {
    fontSize: 20,
    fontWeight: 'semibold',
    color: 'white',
    marginBottom: 20,
  },
  general_items: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#B0DAFF',
    borderBottomWidth: 1,
    paddingBottom: 2,
    marginBottom: 10,
  },
})

export default Profile