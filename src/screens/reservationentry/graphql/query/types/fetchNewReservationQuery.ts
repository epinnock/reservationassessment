/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: fetchNewReservationQuery
// ====================================================

export interface fetchNewReservationQuery_fetchNewReservation {
  __typename: "NewReservation";
  id: string;
  name: string;
  hotelName: string;
  arrivalDate: string;
  departureDate: string;
}

export interface fetchNewReservationQuery {
  fetchNewReservation: fetchNewReservationQuery_fetchNewReservation | null;
}
