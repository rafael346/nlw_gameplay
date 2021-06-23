import React from 'react'
import { View, Text } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import { styles } from './styles'

export type GuildProps = {

}

export type AppointmentProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
}

type Props = RectButton & {
  data: AppointmentProps;
}


export function Appointment({ data, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <Text></Text>
    </View>
  )
}
