import React, { ReactNode } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { View, Text } from 'react-native'
import { theme } from '../../global/styles/theme'

import { styles } from './styles'

type Props = {
  title: string;
  action?: ReactNode;
}

export function Header({ title, action }: Props) {
  const { secondary100, secondary40 } = theme.colors;

  return (
    <LinearGradient
      colors={[secondary100, secondary40]}
    >
      <BorderlessButton>
        <Feather />
      </BorderlessButton>

    </LinearGradient>
  )
}