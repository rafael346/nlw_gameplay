import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';


export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  content: {
    flex: 1,

  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 18
  },
  playersInfo: {},
  players: {}

})