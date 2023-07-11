/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

function App(): JSX.Element {

  const [randomBackground, setrandomBackground] = useState('#ffffff');
  const [counter, setcounter] = useState(0);

  const generateBackground = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setrandomBackground(color);
    setcounter(counter + 1);
  }

  return (
    <>
      <StatusBar backgroundColor={randomBackground} />

      {/* <View style={styles.topContainer}>
        <FlatList
            keyExtractor = {item => item.id}  
            data={exampleState}
            renderItem = {item => (<View style={[styles.innerContainer,{backgroundColor:randomBackground}]}>
              <Text>{item.item.id}</Text>
            </View>)} />
      </View> */}

      <View style={[styles.colorCode, { backgroundColor: (randomBackground) }]}>
        <Text style={{ fontSize: 18, padding: 20 }}>Background hex color code is:
          <Text style={styles.txt}>{randomBackground}</Text>
        </Text>
      </View>

      <View style={[styles.colorCode, { backgroundColor: (randomBackground) }]}>
        <Text style={{ fontSize: 18, padding: 10 }}>
          How many time click on press me button:
          <Text style={styles.txt}>
            {counter}
          </Text>
        </Text>
      </View>

      <View style={[styles.container, { backgroundColor: randomBackground }]}>
        <TouchableOpacity onPress={generateBackground}>
          <View style={styles.actionBtn}>
            <Text style={[styles.actionBtnTxt, { color: randomBackground }]}>Press me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  topContainer:{
    height:50,
    backgroundColor: 'red',
  },
  innerContainer:{
    width:80,
    padding:8,
    borderRadius:12,
    margin:8
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  actionBtn: {
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 12
  },
  actionBtnTxt: {
    fontSize: 24,
    fontWeight: '600',
    color: '#ffffff',
    textTransform: 'capitalize'
  },
  txt: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: '800',
  },
  colorCode: {
    alignItems: 'center',
  }
});

export default App;
