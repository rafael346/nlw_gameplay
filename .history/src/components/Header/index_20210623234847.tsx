import React, { ReactNode } from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'

type Props = {
  title: string;
  action?: ReactNode;
}

export function Header() {
  return (
    <View style={styles.container}>
      <Text></Text>
    </View>
  )
}
