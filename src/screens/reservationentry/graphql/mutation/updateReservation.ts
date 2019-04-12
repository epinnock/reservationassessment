import gql from 'graphql-tag'

export const typedef = gql`
    input NewReservationUpdateInput{
        id:String!
        name:String!
        hotelName:String!
        departureDate:String!
    }
    
    extend type Mutation {
        updateNewReservation(data:NewReservationUpdateInput): NewReservation
    }
  `

export const UPDATE_NEW_RESERVATION_MUTATION = gql`
        mutation updateNewReservation($data:NewReservationUpdateInput!){
            updateNewReservation(data:$data)@client{
                id
                name
                hotelName
                arrivalDate
                departureDate
            }
        }
`