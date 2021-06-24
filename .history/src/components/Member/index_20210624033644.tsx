import React from 'react'
import { View, Text } from 'react-native'
import { theme } from '../../global/styles/theme'
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
  const { on, primary } = theme.colors;
  const isOnline = data.status === 'Online';

  return (
    <View style={styles.container}>
      <Avatar urlImage={data.avatar_url} />

      <View>
        <Text style={styles.title}>
          {data.username}
        </Text>

        <View style={styles.status}>
          <View style={[styles.bulletstatus,
          {
            backgroundColor: isOnline ? 
            }
          ]} />
          <Text style={styles.nameStatus}>
            {isOnline ? 'Disponivel' : 'Ocupado'}
          </Text>
        </View>
      </View>
    </View>
  )
}
