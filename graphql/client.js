import { GraphQLClient } from 'graphql-request'

const endpoint = process.env.GRAPHQL_HOST || ''
const token = process.env.GRAPHQL_TOKEN || ''

const gqlClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${token}`,
  },
})

export default gqlClient
