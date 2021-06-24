import React from 'react'
import { View, Text } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Fontisto } from '@expo/vector-icons'
import { Header } from '../../components/Header'
import { Background } from '../../components/Background'

import { styles } from './styles'

export function AppointmentDetails() {
  return (
    <Background>
      <Header
        title='Detalhes'
        action={
          <BorderlessButton>

          </BorderlessButton>
        }

      />
    </Background>
  )
}
