import React from 'react'
import { View, Text } from 'react-native'

import { styles } from './styles'

export function Profile() {
  return (
    <View style={styles.container}>

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>
            Olá
          </Text>
          <Text style={styles.username}>
            Rafael
          </Text>
        </View>
        <Text style={styles.message}>
          Hoje é dia de Vitória
        </Text>
      </View>


    </View>
  )
}
