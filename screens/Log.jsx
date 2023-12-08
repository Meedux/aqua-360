import React, { useState, useEffect } from 'react'
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, RefreshControl } from 'react-native'
import { Icon } from '@rneui/themed'
import ActivityHistory from '../components/ActivityHistory'
import { auth, getAllTransactions } from '../app/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import LogDetails from '../components/LogDetails'

const Log = () => {
  const [ transactions, setTransactions ] = useState([])
  const [refreshing, setRefreshing] = useState(false);
  const [ id, setId ] = useState('')
  const [ logDetailsVisibility, setLogDetailsVisibility ] = useState(false)
  const [ selectedData, setSelectedData ] = useState({})

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user){
        setRefreshing(true)
        setId(user?.uid)
        getAllTransactions().then((data) => {
          setTransactions(data)
          setRefreshing(false)
          console.log(user)
        })
      }
    })
  }, [])
  console.log(transactions[0])
  return (
    <>
      <ScrollView style={styles.container} refreshControl={<RefreshControl refreshing={refreshing} />}>
        <View style={styles.header}>
          <Text style={styles.header_text}>My Activity</Text>
        </View>

        <View style={styles.items}>
            {
              transactions?.map((item, index) => (
                <TouchableOpacity key={index} style={styles.item_container} onPress={() => {
                  setSelectedData(item)
                  setLogDetailsVisibility(true)
                }}>
                  <Text style={{fontSize: 16, fontWeight: 'semibold', color: '#146C94', marginBottom: 5}}>Name: {item?.user.name}</Text>
                  <Text style={{fontSize: 16, fontWeight: 'semibold', color: '#146C94', marginBottom: 5}}>Address: {item?.address}</Text>
                  <Text style={{fontSize: 16, fontWeight: 'semibold', color: '#146C94', marginBottom: 5}}>Total: {item?.total}</Text>
                </TouchableOpacity>
              ))

            }
        </View>
      </ScrollView>
      <LogDetails visibility={logDetailsVisibility} setVisibility={setLogDetailsVisibility} data={selectedData}/>
    </>
  )
}


const styles = StyleSheet.create({
  container:{
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
  items:{
    marginTop: 30,
    marginHorizontal: 33,
    paddingBottom: 50,
  },
  item_container: {
    width: '100%',
    backgroundColor: '#B0DAFF',
    marginBottom: 25,
    borderRadius: 10,
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
  }
})
export default Log