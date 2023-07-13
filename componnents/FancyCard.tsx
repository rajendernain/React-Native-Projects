import { Dimensions, Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Tranding places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image 
            source={{
                uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ'
            }}
            style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Hawa Mahal</Text>
            <Text style={styles.cardLable}>Pink City Jaipur</Text>
            <Text style={styles.cardDiscription}>
                The Hawa Mahal is a place in the city of Jaipur, India. Built from red and pink sandstone,
                 it is on the edge of the City Place <Text onPress={()=> Linking.openURL('https://en.wikipedia.org/wiki/Hawa_Mahal')} style={styles.txtColor}>more...</Text>
            </Text>
            <Text style={styles.cardFooter}>12 mins away</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        textAlign:'center',
        marginBottom:15,
    },
    txtColor:{color:'blue'},
    card:{
        width:Dimensions.get('window').width-40,
        height:340,
        borderRadius:6,
        // marginVertical:12,
        // marginHorizontal:16,
    },
    cardElevated:{  
       transform: [
          { perspective: 7000 },
          { rotateX: '2deg'},
          { rotateY: '10deg'},
          { skewX: '2deg'},
        ],
         backgroundColor:'#FFFFFF',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1,
        },
        shadowColor:"blue",
        marginLeft:20,
        marginRight:20,
        marginBottom:15,
    },
    cardImage:{
        height:180,
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6,
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12,
    },
    cardTitle:{
        color:'#000000',
        fontSize:22,
        fontWeight:'bold',
        marginBottom:4,
    },
    cardLable:{
        color:'#000000',
        fontSize:14,
        marginBottom:6
    },
    cardDiscription:{
        color:'#242B2E',
        fontSize:12,
        marginBottom:12,
        marginTop:6,
        flexShrink:1,
    },
    cardFooter:{
        color:'#000000'
    },
})