import React from 'react'
import { Image } from 'react-native'

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


    <Image
      source={{ uri }}
      style={styles.image}
      resizeMode="cover"
    />
  )
}
