import React from "react";
import {SafeAreaView,View,Text, StyleSheet, useColorScheme, Button, ImageBackground} from "react-native"; 


function App(){
  const isDarkMode = useColorScheme();
  let direction = "column";
  const handleClick = (data: string ) => {
    console.log(data);
    direction = data;
  }

  return(
    <ImageBackground source={require('./images/pexels-photo-1496372.jpeg')} style={style.container}>
       <View style={style.btn}>
          <Button onPress={() => handleClick('column')} title="Column" />
          <Button onPress={() => handleClick('row')} title="Row" />
        </View>
      <View style={{alignItems:"center", flexDirection: "column",justifyContent: "space-around",flex: 1}}>
        <Text style={(isDarkMode =='light')?style.blackText:style.whiteText}>Hello World</Text>
        <View style={style.box1}></View>
        <View style={style.box2}></View>
        <View style={style.box3}></View>
      </View>
    </ImageBackground>
  );
}

const style = StyleSheet.create({
  btn:{
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 20,
    borderRadius: 10
  },
  container:{
    height: "100%",
    width: "100%"
  },
  box1:{
    width: 50,
          height: 50,
          backgroundColor: 'powderblue',
  },
  box2:{
    width: 100,
          height: 100,
          backgroundColor: 'skyblue',
  },
  box3:{
    width: 150,
    height: 150,
    backgroundColor: 'steelblue',
    //width:100,
  },
  whiteText:{
    color: "red",
    fontSize: 14,
    fontWeight: "bold"
  },
  blackText:{
    color: "blue",
    fontSize: 30,
    fontWeight: "bold"
  }
});

export default App