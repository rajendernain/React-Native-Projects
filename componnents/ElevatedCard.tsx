import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCard</Text>
      <ScrollView horizontal={true} style={styles.container}>
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
    },
    text:{
        fontSize:16,
        fontWeight:'600',
    },
    card:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        width:100,
        height:100,
        borderRadius:4,
        margin:8,
    },
    cardElevated:{
        backgroundColor:"#CAD5E2",
        elevation:4,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:"#333",
        shadowOpacity:0.4,
        shadowRadius:2,
    },
    container:{
        flex:1,
        flexDirection:"row",
        padding:8,
    },
})
