import { createStackNavigator, createAppContainer } from 'react-navigation'
import ReservationListings from './screens/reservationlisting'
import ReservationEntry from './screens/reservationentry'
import { Button } from 'react-native';
import React from 'react';

const appNavigator = createStackNavigator({
    ReservationListings: {
        screen: ReservationListings,
        navigationOptions: ({ navigation }) => ({
            title: 'Reservations',
            headerRight: (
                <Button
                    onPress={() => navigation.navigate('ReservationEntry')}
                    title="New"

                />
            ),
        })
    },
    ReservationEntry: {
        screen: ReservationEntry,
        navigationOptions: () => ({
            title: 'New Reservation'
        })
    }
}, {
        initialRouteName: 'ReservationListings'
    }
);

export default createAppContainer(appNavigator);