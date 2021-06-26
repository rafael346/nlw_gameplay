import React, { useContext } from 'react'
import {
  View,
  Image,
  Text
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import illustration from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon'
import { Background } from '../../components/Background'
import { AuthContext } from '../../context/auth'

import { styles } from './styles'




export function SignIn() {
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate('Home');
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={illustration}
          style={styles.image}
          resizeMode='stretch'
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {'\n'}
            e organize suas {'\n'}
            jogatinas {'\n'}
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {'\n'}
            favoritos com seus amigos
          </Text>

          <ButtonIcon
            title='Entrar com Discord'
            onPress={handleSignIn}
          />

        </View>
      </View>
    </Background>
  )
}
