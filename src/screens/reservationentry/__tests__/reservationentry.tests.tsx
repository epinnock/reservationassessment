import React from 'react'
import { GestureResponderEvent } from 'react-native'
import { mount } from 'enzyme'
import { NavigationScreenProp, NavigationRoute, NavigationParams } from 'react-navigation'
import { ReservationEntry, Props } from '../index'
import Reservation from '../../reservationlisting/components/reservation';
import { Input } from 'react-native-elements';

describe('ReservationEnry tests', () => {
    let props: Props
    beforeEach(() => {
        props = {
            navigation: {} as NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams>,
            newReservationQuery: {
                loading: false,
                fetchNewReservation: {
                    __typename: 'NewReservation',
                    id: '',
                    name: '',
                    hotelName: '',
                    arrivalDate: '',
                    departureDate: '',
                },
                networkStatus: 7,
                variables: {},
                fetchMore: jest.fn(),
                refetch: jest.fn(),
                startPolling: jest.fn(),
                stopPolling: jest.fn(),
                subscribeToMore: jest.fn(),
                updateQuery: jest.fn()
            },
            createReservation: jest.fn(),
            updateNewReservationMutation: jest.fn()
        }
    })

    it('renders conrrectly', () => {
        const wrapper = mount(<ReservationEntry {...props} />);
        expect(wrapper.find(ReservationEntry)).toMatchSnapshot()
    });

    it('calls updateNewReservationMutation', () => {
        const updateNewReservationMutation = jest.fn()
        const wrapper = mount(<ReservationEntry {...props} updateNewReservationMutation={updateNewReservationMutation} />)
        wrapper
            .find(Input)
            .at(0)
            .prop('onChangeText')!('name')
        wrapper
            .find(Input)
            .at(1)
            .prop('onChangeText')!('hotel-name')
        wrapper
            .find(Input)
            .at(2)
            .prop('onChangeText')!('2/2/2019')
        wrapper
            .find(Input)
            .at(3)
            .prop('onChangeText')!('2/3/2019')

        expect(updateNewReservationMutation).toBeCalled()
        expect(updateNewReservationMutation).toMatchSnapshot()

    });



});