import { graphql, MutationFn } from 'react-apollo'
import { createReservation, createReservationVariables, createReservation_createReservation } from '../mutation/types/createReservation'
import { CREATE_RESERVATION } from '../mutation/createReservation'
import { QUERY_RESERVATIONS } from '../../../reservationlisting/graphql/query/queryforReservations'
import defaultVariables from '../../../reservationlisting/graphql/hoc/withreservations'
import console from 'console'


export type withCreateReservationProps = {
    createReservation: MutationFn<createReservation, createReservationVariables>
}

type Response = createReservation_createReservation
export default graphql<{}, Response, {}, withCreateReservationProps>(CREATE_RESERVATION, {
    name: 'createReservation',
    options: {

        update: (cache, { data: { createReservation, } }) => {
            const variables = { skip: 0, first: 15, orderBy: 'createdAt_DESC' }
            try {
                const data = cache.readQuery({
                    query: QUERY_RESERVATIONS,
                    variables
                })
                const reservations = data ? data.reservations : []
                cache.writeQuery({
                    query: QUERY_RESERVATIONS,
                    variables,
                    data: { reservations: [...reservations, createReservation] }
                })
            } catch (err) {
                err;
            }
        }


    },
})
