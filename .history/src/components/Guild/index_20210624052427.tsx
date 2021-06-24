import React from 'react'
import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import { GuildIcon } from '../GuildIcon'

import { styles } from './styles'

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
      <View>

      </View>
    </TouchableOpacity>
  )
}
