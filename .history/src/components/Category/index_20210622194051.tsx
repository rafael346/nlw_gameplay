import React from 'react'
import { View, Text } from 'react-native';
import { SvgProps } from 'react-native-svg'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import { styles } from './styles'
import { categories } from '../../utils/categories'

type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
}


export function Category() {
  return (
    <View>
      <Text></Text>
    </View>
  )
}
