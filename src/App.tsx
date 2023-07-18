import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
  Pressable,
} from 'react-native';

import DiecOne from '../assets/One.png';
import DiecTwo from '../assets/Two.png';
import DiecThree from '../assets/Three.png';
import DiecFour from '../assets/Four.png';
import DiecFive from '../assets/Five.png';
import DiecSix from '../assets/Six.png';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const Dice = ({imageUrl}: DiceProps):JSX.Element =>{
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  )
}

function App(): JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiecOne);
  
  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() *6 ) +1;

    switch (randomNumber) {
      case 1:
        setDiceImage(DiecOne);
        break;
        case 2:
          setDiceImage(DiecTwo);
          break;
          case 3:
            setDiceImage(DiecThree);
            break;
            case 4:
              setDiceImage(DiecFour);
              break;
              case 5:
                setDiceImage(DiecFive);
                break;
                case 6:
                  setDiceImage(DiecSix);
                  break;
    
      default:
        setDiceImage(DiecOne);
        break;
    }
  }
  
  return (
   <View style={styles.container}>
    <Dice imageUrl={diceImage} />
    <Pressable onPress={rollDiceOnTap}>
     <Text style={styles.rollDiceBtnText}>Roll the dice</Text> 
    </Pressable>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;
