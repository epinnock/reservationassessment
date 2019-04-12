/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ReservationOrderByInput } from "./../../../../../types/graphql-global-types";

// ====================================================
// GraphQL query operation: getReservations
// ====================================================

export interface getReservations_reservations {
  __typename: "Reservation";
  id: string;
  name: string;
  hotelName: string;
  arrivalDate: string;
  departureDate: string;
}

export interface getReservations {
  reservations: (getReservations_reservations | null)[];
}

export interface getReservationsVariables {
  skip?: number | null;
  first?: number | null;
  orderBy?: ReservationOrderByInput | null;
}
