import React, { useState } from 'react'
import {
  View,
  Image,
  Text
} from 'react-native'

import IllustrationImg from '../../assets/illustration.png'
import { styles } from './styles'


export function SignIn() {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Image
        source={IllustrationImg}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.text}>
          Organize {'\n'}
          suas jogatinas {'\n'}
          facilmente {'\n'}
        </Text>
      </View>
    </View>
  )
}
