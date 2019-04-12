import { gql } from 'apollo-boost'

export const QUERY_RESERVATIONS = gql`
query getReservations($skip: Int, $first: Int, $orderBy: ReservationOrderByInput) {
  reservations(skip: $skip, first: $first, orderBy: $orderBy) {
    id
    name
    hotelName
    arrivalDate
    departureDate
  }
}`