import React, { useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import ButtonAdd from '../../components/ButtonAdd'
import { CategorySelect } from '../../components/CategorySelect'
import { Profile } from '../../components/Profile'
import { ListHeader } from '../../components/ListHeader'
import { ListDivider } from '../../components/ListDivider'
import { Background } from '../../components/Background'
import { Appointment } from '../../components/Appointment'

import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'

export function Home() {
  const [category, setCategory] = useState('');
  const navigation = useNavigation();

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendarios',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06/2022 as 20:40',
      description: 'vai perder kkkk',
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendarios',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06/2022 as 20:40',
      description: 'vai perder kkkk',
    }
  ]

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleAppointmentDetails() {
    navigation.navigate('AppointmentDetails')
  }
  return (
    <Background>
      <View>
        <View style={styles.header}>
          <Profile />
          <ButtonAdd />
        </View>
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />
        <View style={styles.content}>
          <ListHeader title='Partidas Agendadas' subtitle='Total 6' />
          <FlatList
            data={appointments}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Appointment
                data={item}
                onPress={handleAppointmentDetails}
              />
            )}
            ItemSeparatorComponent={() => <ListDivider />}
            showsVerticalScrollIndicator={false}
            style={styles.matches}
          />
        </View>
      </View>
    </Background>
  )
}


