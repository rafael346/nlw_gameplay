import React from 'react'
import { ScrollView } from 'react-native'
import { categories } from '../../utils/categories';
import { styles } from './styles'

type Props = {
  categorySelected: string;
}

export function CategorySelect({ categorySelected }: Props) {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {
        categories.map(category => (
          <Category
            key={category.id}
            title={category.title}
            icon={category.icon}
            checked={category.id === category.Selected}
          />
        ))
      }

    </ScrollView>
  )
}
