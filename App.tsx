import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './componnents/FlatCards'
import ElevatedCard from './componnents/ElevatedCard'
import FancyCard from './componnents/FancyCard'
import ActionCard from './componnents/ActionCard'
import ContactList from './componnents/ContactList'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>        
        <FlatCards />
        <ElevatedCard />
        <FancyCard />
        <ActionCard />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App