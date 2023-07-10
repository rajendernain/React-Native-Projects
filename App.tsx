import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './componnents/FlatCards'
import ElevatedCard from './componnents/ElevatedCard'
import FancyCard from './componnents/FancyCard'
import ActionCard from './componnents/ActionCard'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>        
        <FlatCards />
        <ElevatedCard />
        <FancyCard />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App