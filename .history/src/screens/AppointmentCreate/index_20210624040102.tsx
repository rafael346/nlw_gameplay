import React, { useState } from 'react'
import { ImageBackground, Text, View, FlatList } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Header } from '../../components/Header'
import { Background } from '../../components/Background'
import { CategorySelect } from '../../components/CategorySelect'

import { theme } from '../../global/styles/theme'
import { styles } from './styles'



export function AppointmentCreate() {
  const [category, setCategory] = useState('');
  return (
    <Background>
      <Header
        title='Agendar Partida'
      />
      <Text style={styles.label}>
        Categoria
      </Text>
      <CategorySelect
        hasCheckBox
        setCategory={setCategory}
        categorySelected={category}
      />
    </Background>
  )
}
