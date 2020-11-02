import React from 'react'
import { Link, Image } from './styles'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ path = '#', cover = DEFAULT_IMAGE, emoji = '❓' }) => (
  <Link to={path}>
    <Image src={cover} />
    {emoji}
  </Link>
)
