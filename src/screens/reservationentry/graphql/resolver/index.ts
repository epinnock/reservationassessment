import { FETCH_NEW_RESERVATION_QUERY } from '../query/fetchNewReservation'
export const resolvers = {
    Mutation: {
        updateNewReservation: (_, newReservation: any, { cache }: { cache: any }) => {
            const data = cache.readQuery({ query: FETCH_NEW_RESERVATION_QUERY })
            const updatedReservation = { ...data.fetchNewReservation, ...newReservation.data }
            cache.writeQuery({ query: FETCH_NEW_RESERVATION_QUERY, data: { fetchNewReservation: updatedReservation } })
            return null;
        },
    },
};

export default resolvers;