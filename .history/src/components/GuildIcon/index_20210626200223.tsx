import React from 'react'
import { Image, View } from 'react-native'
import DiscordSvg from '../../assets/discord.svg'

import { styles } from './styles'

const { CDN_IMAGE } = process.env;

type Props = {
  guildId: string;
  iconId: string;
}
// 

//'https://logodownload.org/wp-content/uploads/2017/11/discord-logo-icone.png
export function GuildIcon({ iconId, guildId }: Props) {
  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`
  return (
    <View style={styles.container}>
      {iconId ?
        <Image
          source={{ uri }}
          style={styles.image}
          resizeMode="cover"
        />
        :
        <DiscordSvg width={40} height={40} />
      }
    </View>
  )
}
