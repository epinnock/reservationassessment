/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ReservationCreateInput } from "./../../../../../types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: createReservation
// ====================================================

export interface createReservation_createReservation {
  __typename: "Reservation";
  id: string;
  name: string;
  hotelName: string;
  arrivalDate: string;
  departureDate: string;
}

export interface createReservation {
  createReservation: createReservation_createReservation;
}

export interface createReservationVariables {
  data: ReservationCreateInput;
}
