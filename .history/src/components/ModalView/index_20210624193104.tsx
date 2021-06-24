import React, { ReacNode } from 'react'
import { View, Modal, ModalProps } from 'react-native'

import { styles } from './styles'

type Props = ModalProps & {
  children: ReacNode;
}

export function ModalView({ children, ...rest }: Props) {
  return (
    <Modal
      transparent
      animationType='slide'
      style={styles.container}
      {...rest}
    >
    </Modal>
  )
}