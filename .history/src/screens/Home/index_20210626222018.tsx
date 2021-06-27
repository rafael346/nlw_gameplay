import React, { useState } from 'react'
import { View, FlatList } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import ButtonAdd from '../../components/ButtonAdd'
import { CategorySelect } from '../../components/CategorySelect'
import { Profile } from '../../components/Profile'
import { ListHeader } from '../../components/ListHeader'
import { ListDivider } from '../../components/ListDivider'
import { Background } from '../../components/Background'
import { Load } from '../../components/Load'
import { Appointment, AppointmentProps } from '../../components/Appointment'


import { styles } from './styles'
import { COLLECTION_APPOINTMENTS } from '../../configs/storage'



export function Home() {
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(true)
  const navigation = useNavigation();

  const [appointments, setAppointments] = useState<AppointmentProps[]>([]);

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleAppointmentDetails() {
    navigation.navigate('AppointmentDetails')
  }

  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate')
  }

  async function loadAppointment() {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);

    const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

    if (category) {
      setAppointments(storage.filter(item => item.category === category));
    } else {
      setAppointments(storage)
    }
    setLoading(false);
  }

  return (
    <Background>
      <View>
        <View style={styles.header}>
          <Profile />
          <ButtonAdd onPress={handleAppointmentCreate} />
        </View>
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />
        {loading ? <View style={styles.load}><Load /> </View> :
          <>
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
              contentContainerStyle={{ paddingBottom: 69 }}
              showsVerticalScrollIndicator={false}
              style={styles.matches}
            />
          </>
        }
      </View>
    </Background>
  )
}


