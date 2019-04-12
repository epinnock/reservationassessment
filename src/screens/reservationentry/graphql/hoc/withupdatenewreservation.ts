import { graphql, MutationFn } from 'react-apollo'
import { UPDATE_NEW_RESERVATION_MUTATION } from '../mutation/updateReservation'
import { updateNewReservation_updateNewReservation, updateNewReservation, updateNewReservationVariables } from '../mutation/types/updateNewReservation'

type Response = updateNewReservation_updateNewReservation;
export type withUpdateNewReservationMutationProps = {
    updateNewReservationMutation: MutationFn<updateNewReservation, updateNewReservationVariables>
}

export default graphql<{}, Response, {}, withUpdateNewReservationMutationProps>(UPDATE_NEW_RESERVATION_MUTATION,
    { name: 'updateNewReservationMutation' })