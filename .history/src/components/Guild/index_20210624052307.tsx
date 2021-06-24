import React from 'react'
import { View, TouchableOpacity, TouchableOpacityProps } from 'react-native'

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
    <TouchableOpacity style={styles.container}>

    </TouchableOpacity>
  )
}
