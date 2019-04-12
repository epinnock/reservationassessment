import React, { memo, PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getReservations_reservations } from '../../graphql/query/types/getReservations'
export interface Props {
    reservation: getReservations_reservations
}
export default class Reservation extends PureComponent<Props>{
    render() {
        const { name, hotelName, arrivalDate, departureDate } = this.props.reservation;
        return (<View style={styles.container}>
            <View style={styles.bookingInfo}>
                <Text style={styles.nameFont}>{name}</Text>
                <Text style={styles.hotelFont}>{hotelName}</Text>
            </View>
            <View style={styles.dateRange}>
                <Text style={styles.dateRangefont}>{`${arrivalDate} - ${departureDate}`}</Text>

            </View>
        </View>)
    }


}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        marginVertical: 3,
        marginHorizontal: 5,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    dateRange: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'

    },
    bookingInfo: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    dateRangefont: {
        fontSize: 12,
        color: '#FF9900'
    },
    nameFont: {
        fontSize: 22,
    },
    hotelFont: {
        fontSize: 16,
        color: '#CCCCCC'

    }
})