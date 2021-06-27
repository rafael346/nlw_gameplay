import React from 'react'
import { ImageBackground, Text, View, FlatList } from 'react-native'
import { useRoute } from '@react-navigation/native'
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
import { AppointmentProps } from '../../components/Appointment'


type Params = {
  guildSelected: AppointmentProps
}

export function AppointmentDetails() {
  const route = useRoute();
  const { guildSelected } = route.params as Params;
  const members = [
    {
      id: '1',
      username: 'Rafael',
      avatar_url: 'https://github.com/rafael346.png',
      status: 'Online'
    },
    {
      id: '2',
      username: 'Raul',
      avatar_url: 'https://github.com/rafael346.png',
      status: 'Offline'
    },
    {
      id: '3',
      username: 'Smzinho',
      avatar_url: 'https://github.com/rafael346.png',
      status: 'Offline'
    }
  ]
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
      <FlatList
        style={styles.members}
        data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Member
            data={item}
          />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
      />
      <View style={styles.footer}>
        <ButtonIcon
          title='Entrar na Partida'
        />
      </View>
    </Background>
  )
}
