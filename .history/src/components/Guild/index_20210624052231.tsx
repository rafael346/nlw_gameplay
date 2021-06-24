import React from 'react'
import { View, TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { styles } from './styles'

type GuildProps = {
  id: string;
  name: string;
  icon: string;
  owner: string;
}

type Props = TouchableOpacityProps & {
  data: GuildProps;
}

export function Guild() {
  return (
    <TouchableOpacity style={styles.container}>
      <Text></Text>
    </TouchableOpacity>
  )
}
