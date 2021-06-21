import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { styles } from './styles'


export function SignIn() {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Text>Testea</Text>
      <TextInput
        style={styles.input}
        onChangeText={setText}
      />
      <Text>
        Voce Digitou: {text}
      </Text>
    </View>
  )
}
