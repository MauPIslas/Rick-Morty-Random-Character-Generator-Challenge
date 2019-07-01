import gql from 'graphql-tag';

const QueryChar = gql`query oneCharacter($id: ID = 4) {
  character(id: $id) {
    name
    id
    status
    species
    gender
    type
    created
    origin{
      name
    }
    location{
      name
    }
    image
  }
}
 `

export default QueryChar;