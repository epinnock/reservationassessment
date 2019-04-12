import gql from 'graphql-tag'

export const CREATE_RESERVATION = gql`
    mutation createReservation($data:ReservationCreateInput!){
        createReservation(data: $data){
            id
            name
            hotelName
            arrivalDate
            departureDate
        }
    }
`