import React from 'react'
import { View, Text } from 'react-native'
import { Avatar } from '../Avatar'
import { styles } from './styles'

type MemberProps = {
  id: string;
  username: string;
  avatar_url: string;
  status: string;
}

type Props = {
  data: MemberProps;
}

export function Member({ data }: Props) {
  return (
    <View style={styles.container}>
      <Avatar urlImage={ } />
    </View>
  )
}
