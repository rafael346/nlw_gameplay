import React from 'react'
import { ImageBackground, Text, View } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Fontisto } from '@expo/vector-icons'
import { Header } from '../../components/Header'
import { Background } from '../../components/Background'
import { ListHeader } from '../../components/ListHeader'
import BannerImg from '../../assets/banner.png'

import { theme } from '../../global/styles/theme'
import { styles } from './styles'


export function AppointmentDetails() {
  return (
    <Background>
      <Header
        title='Detalhes'
        action={
          <BorderlessButton>
            <Fontisto
              name="share"
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />
      <ImageBackground
        source={BannerImg}
        style={styles.banner}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}>
            Lendários
          </Text>
          <Text style={styles.subtitle}>
            É hoje que eu perco todas e  vou pro ferro 5
          </Text>
        </View>
      </ImageBackground>
      <ListHeader
        title="Jogadores"
        subtitle="Total 3"
      />
    </Background>
  )
}
