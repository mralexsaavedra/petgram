import React from 'react'
import { Helmet } from 'react-helmet'

import { ListOfPhotoCards } from '../container/ListOfPhotoCards'

import { Layout } from '../components/Layout'
import { ListOfCategories } from '../components/ListOfCategories'

const HomePage = ({ categoryId }) => {
  return (
    <Layout title='Tu app de fotos de mascotas' subtitle='Tu aplicación para descubrir fotos de animales domésticos, hecha con React ⚛️'>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </Layout>
  )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId
})
