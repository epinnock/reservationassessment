import gql from 'graphql-tag'

export const typedef = gql`
    type NewReservation{
        id:String!
        name:String!
        hotelName:String!
        arrivalDate:String!
        departureDate:String!
    }
    extend type Query{
        fetchNewReservation: NewReservation
    }
`
export const FETCH_NEW_RESERVATION_QUERY = gql`
query fetchNewReservationQuery{
    fetchNewReservation @client{
        id
        name
        hotelName
        arrivalDate
        departureDate
    }
}

`