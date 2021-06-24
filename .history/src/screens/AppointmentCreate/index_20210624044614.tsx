import React, { useState } from 'react'
import { Text, View, FlatList } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { Header } from '../../components/Header'
import { Background } from '../../components/Background'
import { CategorySelect } from '../../components/CategorySelect'
import { GuildIcon } from '../../components/GuildIcon'
import { SmallInput } from '../../components/SmallInput'
import { TextArea } from '../../components/TextArea'

import { theme } from '../../global/styles/theme'
import { styles } from './styles'




export function AppointmentCreate() {
  const [category, setCategory] = useState('');
  return (
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
        <RectButton>
          <View style={styles.select}>
            {
              /*<View style={styles.image} /> */
              <GuildIcon />
            }


            <View style={styles.selectBody}>
              <Text style={styles.label}>
                Selecione um Servidor
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
            <Text style={styles.label}>Dia e Mês</Text>
            <View style={styles.column}>
              <SmallInput maxLength={2} />
              <Text style={styles.divider}>
                /
              </Text>
              <SmallInput maxLength={2} />
            </View>
          </View>
          <View>
            <Text style={styles.label}>Horário</Text>
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
          <Text style={styles.label}>Descrição</Text>
          <Text style={styles.caracteresLimit}>Max 100 caracteres</Text>
          <TextArea
            multiline
            maxLength={100}
            numberOfLines={5}
            autoCorrect={false}
          />
        </View>
      </View>

    </Background>
  )
}
