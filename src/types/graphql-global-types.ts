/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum ReservationOrderByInput {
  arrivalDate_ASC = "arrivalDate_ASC",
  arrivalDate_DESC = "arrivalDate_DESC",
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",
  departureDate_ASC = "departureDate_ASC",
  departureDate_DESC = "departureDate_DESC",
  hotelName_ASC = "hotelName_ASC",
  hotelName_DESC = "hotelName_DESC",
  id_ASC = "id_ASC",
  id_DESC = "id_DESC",
  name_ASC = "name_ASC",
  name_DESC = "name_DESC",
  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",
}

export interface NewReservationUpdateInput {
  id: string;
  name: string;
  hotelName: string;
  arrivalDate: string;
  departureDate: string;
}

export interface ReservationCreateInput {
  id?: string | null;
  name: string;
  hotelName: string;
  arrivalDate: string;
  departureDate: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
