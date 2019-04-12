import { getReservations, getReservationsVariables } from "../query/types/getReservations"
import { QUERY_RESERVATIONS } from "../query/queryforReservations";
import { graphql, ChildDataProps } from 'react-apollo';
import { ReservationOrderByInput } from "../../../../types/graphql-global-types";
type Response = getReservations;
type Variables = getReservationsVariables;
export type ReservationChildProps = ChildDataProps<{}, Response, Variables>
export const defaultVariables = {
    orderBy: ReservationOrderByInput.createdAt_DESC,
    skip: 0,
    first: 15,
}
export default graphql<any, Response, Variables, ReservationChildProps>(QUERY_RESERVATIONS, {
    options: {
        fetchPolicy: 'cache-and-network',
        variables: defaultVariables
    }
});

