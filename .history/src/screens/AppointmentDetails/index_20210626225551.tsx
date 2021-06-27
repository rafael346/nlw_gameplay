import React, { useEffect, useState } from 'react'
import { ImageBackground, Text, View, FlatList, Alert } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Fontisto } from '@expo/vector-icons'
import { Header } from '../../components/Header'
import { Background } from '../../components/Background'
import { ListHeader } from '../../components/ListHeader'
import { Load } from '../../components/Load'
import { Member, MemberProps } from '../../components/Member'
import { ListDivider } from '../../components/ListDivider'
import { ButtonIcon } from '../../components/ButtonIcon'
import BannerImg from '../../assets/banner.png'


import { theme } from '../../global/styles/theme'
import { styles } from './styles'
import { AppointmentProps } from '../../components/Appointment'
import { api } from '../../services/api'


type Params = {
  guildSelected: AppointmentProps
}

type GuildWidget = {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];
  presence_count: number;
}

export function AppointmentDetails() {
  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget) //data do widget do servidor do discord
  const [loading, setLoading] = useState(true);
  const route = useRoute();
  const { guildSelected } = route.params as Params;

  async function fetchGuildInfo() {
    try {
      const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`);
      setWidget(response.data);
      setLoading(false);
    } catch {
      Alert.alert('Verifique as configurações do servidor. Necessário ativar widget do servidor')
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchGuildInfo();
  }, [])

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
            {guildSelected.guild.name}
          </Text>
          <Text style={styles.subtitle}>
            {guildSelected.description}
          </Text>
        </View>
      </ImageBackground>
      {loading ? <Load /> :
        <>
          <ListHeader
            title="Jogadores"
            subtitle="Total 3"
          />
          <FlatList
            style={styles.members}
            data={widget.members}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Member
                data={item}
              />
            )}
            ItemSeparatorComponent={() => <ListDivider />}
          />
        </>
      }
      <View style={styles.footer}>
        <ButtonIcon
          title='Entrar na Partida'
        />
      </View>
    </Background>
  )
}
