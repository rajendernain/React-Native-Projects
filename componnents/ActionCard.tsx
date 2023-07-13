import { StyleSheet, Text, View, Linking, Image,TouchableOpacity,Dimensions  } from 'react-native'
import React from 'react'

export default function ActionCaer() {
  function openWebsite(websiteLinnk: string){
    Linking.openURL(websiteLinnk)
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
       <View style={styles.headingContainer}>
         <Text style={styles.headerText}>
           What`s new in Javascript 21 - ES12`
         </Text>
        </View>
        <Image 
          source={{
            uri:'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            Just like every year, Javascript brings in new features. This year
            javascript is bringing 4 new features, which are almost in
            production rollout. I won't be wasting much more time and directly
            jump to code with easy to understand examples.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={()=> openWebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')}>
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> openWebsite('https://www.instagram.com/hiteshchoudharyofficial/')}>
            <Text style={styles.socialLinks}>Follow me</Text>
          </TouchableOpacity>
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
    paddingBottom:15
  },
  card:{
    width: Dimensions.get('window').width-40,
    height:360,
    borderRadius:6,
    //marginVertical:12,
   // marginHorizontal:16,
  },
  elevatedCard:{
    backgroundColor:'#E07C24',    
    borderTopLeftRadius:6,
    borderTopRightRadius:6,
    marginLeft:20,
    marginRight:20,
    elevation:3,
    shadowOffset:{
      width:1,
      height:1,
    },
    shadowColor:'#333',
    shadowOpacity:0.4,
  },
  headingContainer:{
    height:40,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  headerText:{
    color:'#fff',
    fontSize:16,
    fontWeight:'800',
  },
  cardImage:{
    height:190,
  },
  bodyContainer:{
    padding:10,
  },
  footerContainer:{
    padding:8,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  socialLinks:{
    fontSize:16,
    color:'#000000',
    backgroundColor:'#fff',
    paddingHorizontal:20,
    paddingVertical:6,
    borderRadius:6,
  },
})