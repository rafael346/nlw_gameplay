import React, { useState } from 'react'
import { Text, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { Header } from '../../components/Header'
import { Background } from '../../components/Background'
import { CategorySelect } from '../../components/CategorySelect'
import { GuildIcon } from '../../components/GuildIcon'
import { SmallInput } from '../../components/SmallInput'
import { TextArea } from '../../components/TextArea'
import { ModalView } from '../../components/ModalView'
import { Guilds } from '../Guilds'

import { theme } from '../../global/styles/theme'
import { styles } from './styles'
import { Button } from '../../components/Button'
import { GuildProps } from '../../components/Guild'

export function AppointmentCreate() {
  const [category, setCategory] = useState('');
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  function handleOpenGuilds() {
    setOpenGuildsModal(true);
  }

  function handleCloseGuilds() {
    setOpenGuildsModal(false);
  }

  function handleGuildSelect(guildSelect: GuildProps) {
    setGuild(guildSelect);
    setOpenGuildsModal(false);
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView>
        <Background>
          <Header
            title='Agendar Partida'
          />
          <Text style={[styles.label, { marginLeft: 24, marginTop: 36, marginBottom: 18 }]}>
            Categoria
          </Text>
          <CategorySelect
            hasCheckBox
            setCategory={setCategory}
            categorySelected={category}
          />
          <View style={styles.form}>
            <RectButton onPress={handleOpenGuilds}>
              <View style={styles.select}>
                {
                  guild.icon
                    ? <GuildIcon />
                    : <View style={styles.image} />
                }


                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    {guild.name ? guild.name : 'Selecione um Servidor'}
                  </Text>
                </View>
                <View>
                  <Feather
                    name="chevron-right"
                    color={theme.colors.heading}
                    size={18}
                  />
                </View>
              </View>
            </RectButton>
            <View style={styles.field}>
              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>Dia e M??s</Text>
                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>
                    /
                  </Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>
              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>Hor??rio</Text>
                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>
                    :
                  </Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>

            </View>

            <View style={styles.field}>
              <Text style={[styles.label, { marginBottom: 12 }]}>Descri????o</Text>
              <Text style={styles.caracteresLimit}>Max 100 caracteres</Text>
            </View>
            <TextArea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
            />
            <View style={styles.footer}>
              <Button title='Agendar' />
            </View>
          </View>
        </Background>
      </ScrollView>
      <ModalView closeModal={handleCloseGuilds} visible={openGuildsModal}>
        <Guilds handleGuildSelect={handleGuildSelect} />
      </ModalView>
    </KeyboardAvoidingView>
  )
}
