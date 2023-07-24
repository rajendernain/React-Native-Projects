
import React, { useState } from 'react';

import {
  Dimensions,
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

//constants
import { currencyByRupee } from './constants';
import CurrencyButton from './components/CurrencyButton';
import Snackbar from 'react-native-snackbar';

function App(): JSX.Element {
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');

  const buttonPressed = (targetValue: Currency)=>{
    if(!inputValue){
      return Snackbar.show({
        text:"Enter a value to convert",
        backgroundColor:"#ea7773",
        textColor:"#FFFFFF",
      })
    }
    const inputAmount = parseFloat(inputValue);
    if(!isNaN(inputAmount)){
      const convertedValue = inputAmount * targetValue.value;
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`
      setResultValue(result);
      setTargetCurrency(targetValue.name)
    }else{
      return Snackbar.show({
        text:"Not a valid number to convert",
        backgroundColor:"#F4BE2c",
        textColor:"#000000"
      })
    }
  }
    return (
      <>
        <StatusBar />
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <View style={styles.rupeesContainer}>
              <Text style={styles.rupee}>Rs :)</Text>
              <TextInput 
                maxLength={14}
                value={inputValue}
                clearButtonMode='always'
                onChangeText={setInputValue}
                keyboardType='number-pad'
                placeholder='Enter amount in rupees'
                style={{fontSize:20}}
              />
            </View>
            {resultValue && (
              <Text style={styles.resultTxt}>{resultValue}</Text>
            )}
          </View>
          <View style={styles.bottomContainer}>
            <FlatList 
              numColumns={2}
              data={currencyByRupee}
              keyExtractor={item => item.name}
              renderItem={({item}) => (
                <Pressable style={[styles.button,
                targetCurrency === item.name && styles.selected
                ]}
                onPress={() => buttonPressed(item)}
                >
                  <CurrencyButton {...item}/>
                </Pressable>
              )}
            />
          </View>
        </View>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,
    marginLeft:8,
    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth:2,
    borderRadius:5,
    width:Dimensions.get('window').width-50
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,
    margin: 12,
    height: 75,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 10,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});

export default App;
