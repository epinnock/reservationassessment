import { FETCH_NEW_RESERVATION } from '../query/fetchNewReservation'
export const resolvers = {
    Mutation: {
        updateNewReservation: ((_, newReservation, { cache })) => {
    const data = cache.readQuery({ query: FETCH_NEW_RESERVATION })
    const updatedReservation = { ...data.newReservation, ...newReservation.data }
    cache.writeQuery({ query: FETCH_NEW_RESERVATION, data: { newReservation: updatedReservation } })
    return null;
},
    },
};

export default resolvers;