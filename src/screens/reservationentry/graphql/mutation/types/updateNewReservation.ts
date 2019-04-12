/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { NewReservationUpdateInput } from "./../../../../../types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: updateNewReservation
// ====================================================

export interface updateNewReservation_updateNewReservation {
  __typename: "NewReservation";
  id: string;
  name: string;
  hotelName: string;
  arrivalDate: string;
  departureDate: string;
}

export interface updateNewReservation {
  updateNewReservation: updateNewReservation_updateNewReservation | null;
}

export interface updateNewReservationVariables {
  data: NewReservationUpdateInput;
}
