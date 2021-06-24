import React, { ReactNode } from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'

type Props = {
  title: string;
  action?: ReactNode;
}

export function Header({ title, action }: Props) {
  return (
    <View style={styles.container}>
      <Text></Text>
    </View>
  )
}
