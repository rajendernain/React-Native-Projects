import { View, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native'
import React, { useState } from 'react'
import FlatCards from './componnents/FlatCards'
import ElevatedCard from './componnents/ElevatedCard'
import FancyCard from './componnents/FancyCard'
import ActionCard from './componnents/ActionCard'
import ContactList from './componnents/ContactList'

const App = () => {
  const [randomBackground, setrandomBackground] = useState('#50DBB4');
  return (
    <>
    <SafeAreaView>
    <StatusBar backgroundColor={randomBackground} />
      <ScrollView showsVerticalScrollIndicator={false}>        
        <FlatCards />
        <ElevatedCard />
        <FancyCard />
        <ContactList />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
    </>
  )
}

export default App