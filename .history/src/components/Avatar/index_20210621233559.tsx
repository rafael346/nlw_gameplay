import React from 'react'
import { View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { theme } from '../../global/styles/theme'
import { styles } from './styles'

type Props = {
  urlImage: string;
}

export function Avatar({ urlImage }: Props) {
  const { secondary80, secondary100 } = theme.colors
  return (
    <View>
      <LinearGradient style={styles.container} colors={[secondary80, secondary100]}>
        <Image

        />
      </LinearGradient>
      )
    </View>
  )
}
