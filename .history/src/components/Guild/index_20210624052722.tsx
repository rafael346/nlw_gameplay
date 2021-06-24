import React from 'react'
import { TouchableOpacity, TouchableOpacityProps, View, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { GuildIcon } from '../GuildIcon'

import { styles } from './styles'
import { theme } from '../../global/styles/theme'

type GuildProps = {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
}

type Props = TouchableOpacityProps & {
  data: GuildProps;
}

export function Guild({ data, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      {...rest}
    >
      <GuildIcon />
      <View style={styles.content}>
        <View>
          <Text style={styles.type}>
            {data.name}
          </Text>

          <Text style={styles.title}>
            {data.owner ? 'Administrador' : 'Convidado'}
          </Text>
        </View>

        <Feather
          name="chevron-right"
          color={theme.colors.heading}
        />
      </View>
    </TouchableOpacity>
  )
}