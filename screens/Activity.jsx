import React, { useState } from 'react'
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native'
import { Icon } from '@rneui/themed'
import ActivityHistory from '../components/ActivityHistory'

const Activity = ({ navigation }) => {
  const [ activityHistoryVisibility, setActivityHistoryVisibility ] = useState(false)

  return (
    <>
      <ScrollView style={styles.activity_container}>
        <View style={styles.header}>
          <View style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
            <TouchableOpacity style={styles.header_button} onPress={() => setActivityHistoryVisibility(true)}>
              <Icon name="restore" color={'#146C94'}/>
              <Text style={{color: '#146C94', fontWeight: 'bold'}}>History</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.header_text}>My Activity</Text>
        </View>

        <View style={styles.activity_items}>
          <Text style={{fontSize: 16, color: '#fff', marginBottom: 10}}>Ongoing</Text>

          <View style={styles.activity}>

          </View>
        </View>

        <ActivityHistory visibility={activityHistoryVisibility} setVisibility={setActivityHistoryVisibility} navigation={navigation}/>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  activity_container:{
    width: '100%',
    backgroundColor: '#19A7CE',
  },
  header: {
    marginTop: 40,
    marginHorizontal: 33,
  },
  header_button:{
    height: 31,
    width: 103,
    backgroundColor: '#B0DAFF',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 35,
    paddingHorizontal: 10,
  },
  header_text:{
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
  activity_items:{
    marginTop: 30,
    marginHorizontal: 33,
  },
  activity: {
    width: '100%',
    height: 67,
    backgroundColor: '#B0DAFF',
    marginBottom: 25,
    borderRadius: 10,
  }
})
export default Activity