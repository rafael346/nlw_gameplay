import React from 'react'
import { View, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { theme } from '../../global/styles/theme'
import { styles } from './styles'

type Props = {
  urlImage: string;
}

export function Avatar({ urlImage }: Props) {
  const { heading, secondary100 } = theme.colors
  return (
    <View>
      <LinearGradient style={styles.container} colors={[heading, secondary100]}>
        <Image
          source={{ uri: urlImage }}
          style={styles.avatar}
        />
      </LinearGradient>
    </View>
  )
}