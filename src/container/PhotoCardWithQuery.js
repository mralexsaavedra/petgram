import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

import { PhotoCard } from '../components/PhotoCard'

const GET_SINGLE_QUERY = gql`
query getSinglePhoto($id:ID!) {
  photo(id:$id) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}`

const renderProp = ({ loading, error, data }) => {
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error! ⛔</p>
  return <PhotoCard {...data.photo} />
}

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_QUERY} variables={{ id }}>
    {renderProp}
  </Query>
)
