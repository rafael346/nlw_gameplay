import React from 'react'
import { ImageBackground, Text, View, FlatList } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Fontisto } from '@expo/vector-icons'
import { Header } from '../../components/Header'
import { Background } from '../../components/Background'
import { ListHeader } from '../../components/ListHeader'
import BannerImg from '../../assets/banner.png'
import { Member } from '../../components/Member'
import { ListDivider } from '../../components/ListDivider'
import { ButtonIcon } from '../../components/ButtonIcon'


import { theme } from '../../global/styles/theme'
import { styles } from './styles'



export function AppointmentCreate() {

  return (
    <Background>
      <Header
        title='Detalhes'
      />
    </Background>
  )
}
