import React from 'react'
import { View, Text } from 'react-native';
import { SvgProps } from 'react-native-svg'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient';
import { categories } from '../../utils/categories'

import { styles } from './styles'
import { theme } from '../../global/styles/theme';


type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  hasCheckBox?: boolean;
  checked?: boolean;
}


export function Category({
  title,
  icon: Icon,
  checked = false,
  hasCheckBox = false,
  ...rest
}: Props) {

  const { secondary40, secondary50, secondary70, on } = theme.colors;

  return (
    <RectButton {...rest}>
      <LinearGradient style={styles.container} colors={[secondary50, secondary70]}>
        <LinearGradient
          style={[styles.content]}
          colors={[checked ? on, on : secondary50, secondary40]}
        >
        {
          hasCheckBox &&
          <View style={checked ? styles.checked : styles.check} />
        }
        <Icon width={48} height={48} />
        <Text style={styles.title}>{title}</Text>
      </LinearGradient>
      </LinearGradient>
    </RectButton >
  )
}