import { Dimensions, ScrollView, StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'

export default function ElevatedCard() {
    const imagesLinks = [
        {
          id: 1,
          imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
        },
        {
          id: 2,
          imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
        },
        {
          id: 3,
          imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
        },
        {
          id: 4,
          imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
        {
          id: 5,
          imageUrl: 'https://avatars.githubusercontent.com/u',
        },
        {
          id: 6,
          imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
        {
          id: 7,
          imageUrl: 'https://avatars.githubusercontent.com/u',
        },
        {
          id: 8,
          imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
        {
          id: 9,
          imageUrl: 'https://avatars.githubusercontent.com/u',
        },
        {
          id: 10,
          imageUrl: 'https://avatars.githubusercontent.com/u',
        },
        
      ];
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCard</Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.container}>
      {imagesLinks.map(({id, imageUrl})=>(
            <View key={id}>
                <Image 
                    source={{
                        uri: imageUrl
                    }}
                style={styles.userImage}    
                />
            </View>
        ))}
      </ScrollView>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.container}>
          <View style={[styles.card, styles.cardElevated]}>
              <Text style={styles.text}>Tap</Text>
          </View>
          <View style={[styles.card, styles.cardElevated]}>
              <Text style={styles.text}>Me</Text>
          </View>
          <View style={[styles.card, styles.cardElevated]}>
              <Text style={styles.text}>To</Text>
          </View>
          <View style={[styles.card, styles.cardElevated]}>
              <Text style={styles.text}>Scroll</Text>
          </View>
          <View style={[styles.card, styles.cardElevated]}>
              <Text style={styles.text}>more..</Text>
          </View>
          <View style={[styles.card, styles.cardElevated]}>
              <Text style={styles.text}>@</Text>
          </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        textAlign:'center',
        marginBottom:10,
    },
    text:{
        fontSize:16,
        fontWeight:'600',
    },
    card:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        width:Dimensions.get('window').width/5,
        height:100,
        borderRadius:50,
        margin:1,
    },
    userImage:{
        width:60,
        height:60,
        borderRadius:60/2,
        marginRight:14
    },
    cardElevated:{
        backgroundColor:"red",
        elevation:4,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:"#228b2",
        shadowOpacity:0.4,
        shadowRadius:2,
    },
    container:{
        flex:1,
        flexDirection:"row",
        width: Dimensions.get('window').width-40,
        paddingTop:8,
        paddingBottom:8,
        marginLeft:20,
        marginRight:20,
    },
})
