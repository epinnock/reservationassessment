import { graphql, DataValue } from 'react-apollo'
import { FETCH_NEW_RESERVATION_QUERY } from '../query/fetchNewReservation'
import { fetchNewReservationQuery } from '../query/types/fetchNewReservationQuery'

type Response = fetchNewReservationQuery;


export type withNewReservationQueryProps = { fetchNewReservationQuery: DataValue<Response, {}> }

export default graphql<{}, Response, {}, withNewReservationQueryProps>(FETCH_NEW_RESERVATION_QUERY, {
    name: 'fetchNewReservationQuery',
})
