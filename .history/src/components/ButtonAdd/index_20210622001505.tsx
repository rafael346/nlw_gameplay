import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { View, Text } from 'react-native'
import { styles } from './styles'

type Props = RectButtonProps & {
  title: string;
}


export default function ButtonAdd() {
  return (
    <RectButton
      style={styles.container}>

    </RectButton>
  )
}
