import React from 'react'
import { ScrollView, StyleSheet, View, TextInput, Image, TouchableOpacity, Text} from 'react-native'
import { Icon } from '@rneui/base'


const Home = () => {
  return (
    <>
        <ScrollView style={styles.home_container}>
          <View style={styles.header}>
            <Icon name='notifications' size={40} color={'#B0DAFF'}/>

            <Icon name='shopping-cart' size={40} color={'#B0DAFF'}/>
          </View> 

          <View style={styles.inputContainer}>
              <Icon type="material" name="search" size={30} color={'#146C94'} style={{marginRight: 10}}/>
              <TextInput placeholder="Search" secureTextEntry onChange={(e) => setPassword(e)}/>
          </View>

          <View style={styles.image_container}>
            <Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/aqua-360.appspot.com/o/app%2Faqua.jpg?alt=media&token=58fdc8b6-a01e-4da9-978a-3e8312346b56'}} style={styles.image}/>
          </View>


          <View style={styles.catalog_container}>
            <Text style={styles.catalog_header}>Catalog</Text>

            <View style={styles.catalog_items}>
              <TouchableOpacity style={styles.catalog_item}>
                <Image 
                    source={{
                      uri: 'https://firebasestorage.googleapis.com/v0/b/aqua-360.appspot.com/o/app%2FGallon.png?alt=media&token=75a3b307-66a4-4136-b57f-765e3212a713'
                    }}
                    style={{
                      height: 100,
                      width: 57,
                    }}
                  />
              </TouchableOpacity>

              <TouchableOpacity style={styles.catalog_item}>
                <Image 
                    source={{
                      uri: 'https://firebasestorage.googleapis.com/v0/b/aqua-360.appspot.com/o/app%2FDispenser.png?alt=media&token=fb992fac-a2c4-4f0e-aa30-52fd3d06de06'
                    }}
                    style={{
                      height: 89,
                      width: 79,
                    }}
                  />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
    home_container:{
        width: '100%',
        backgroundColor: '#19A7CE',
    },
    logo_container: {

    }, 
    header: {
        marginTop: 40,  
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 33,
    },
    inputContainer: {
      marginTop: 35, 
      borderColor: "#B0DAFF", // Same color as border
      backgroundColor: '#B0DAFF',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1, // Create border
      borderRadius: 29, // Not needed. Just make it look nicer.
      padding: 8, // Also used to make it look nicer
      zIndex: 0, // Ensure border has z-index of 0
      marginBottom: 20,

      borderWidth: 2,
      borderBottomWidth: 2,

      marginHorizontal: 33,
  },
  image_container: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  image: {
    height: 205,
    width: 310,
    borderRadius: 25,
    marginHorizontal: 33,
    resizeMode: 'stretch',
  },
  catalog_container: {
    marginTop: 30,
    marginHorizontal: 25,
  },
  catalog_header:{
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  catalog_items: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  catalog_item: {
    height: 130,
    width: 146,
    borderRadius: 25,
    backgroundColor: '#B0DAFF',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

  },
  catalog_image: {
    
  } 
})

export default Home