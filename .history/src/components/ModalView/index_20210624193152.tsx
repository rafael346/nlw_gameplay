import React, { ReactNode } from 'react'
import { View, Modal, ModalProps } from 'react-native'

import { styles } from './styles'

type Props = ModalProps & {
  children: ReactNode;
}

export function ModalView({ children, ...rest }: Props) {
  return (
    <Modal
      transparent
      animationType='slide'

      {...rest}
    >
      <View style={styles.overlay}>

      </View>
    </Modal>
  )
}