import { graphql, DataValue, ChildDataProps } from 'react-apollo'
import { FETCH_NEW_RESERVATION_QUERY } from '../query/fetchNewReservation'
import { fetchNewReservationQuery } from '../query/types/fetchNewReservationQuery'

type Response = fetchNewReservationQuery;


export type withNewReservationQueryProps = { newReservationQuery: DataValue<Response, {}> }

export default graphql<any, Response, {}, withNewReservationQueryProps>(FETCH_NEW_RESERVATION_QUERY, {
    name: 'newReservationQuery',
})
