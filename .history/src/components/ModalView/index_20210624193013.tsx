import React, { ReacNode } from 'react'
import { View, Modal, ModalProps } from 'react-native'

import { styles } from './styles'

type Props = ModalProps & {
  children: ReacNode;
}

export function ModalView() {
  return (
    <View style={styles.container}>
    </View>
  )
}