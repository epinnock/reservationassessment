import React, { Component, PureComponent } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import withCreateReservationHOC, { withCreateReservationProps } from './graphql/hoc/withcreateReservation'
import { NavigationInjectedProps } from 'react-navigation'
import { compose } from 'react-apollo';
import { Input, Icon } from 'react-native-elements';
import withFetchNewReservationHOC, { withNewReservationQueryProps } from './graphql/hoc/withfetchnewreservation';
import withUpdateNewReservationHOC, { withUpdateNewReservationMutationProps } from './graphql/hoc/withupdatenewreservation'
import { NewReservationUpdateInput } from '../../types/graphql-global-types';
import newReservation from './graphql/default/newreservation';

export interface Props extends withCreateReservationProps, NavigationInjectedProps, withNewReservationQueryProps, withUpdateNewReservationMutationProps { }

export class ReservationEntry extends PureComponent<Props>{
    constructor(props: Readonly<Props>) {
        super(props);

    }

    createReservation = async () => {

        const {
            newReservationQuery: {
                fetchNewReservation
            },

        } = this.props

        const { name, hotelName, arrivalDate, departureDate } = fetchNewReservation!

        await this.props.createReservation({
            variables: {
                data: {
                    name,
                    hotelName,
                    arrivalDate,
                    departureDate
                }
            }
        });


        this.clear();
        this.props.navigation.goBack();
    }

    clear = async () => {

        this.updateNewReservation({
            name: '',
            hotelName: '',
            arrivalDate: '',
            departureDate: ''
        })
    }

    componentWillUnmount() {
        this.clear();
    }

    initialUpdate() {
        const {
            updateNewReservationMutation
        } = this.props;
        const data = {
            id: '',
            name: '',
            hotelName: '',
            arrivalDate: '',
            departureDate: ''
        }
        updateNewReservationMutation({ variables: { data } })
    }

    updateNewReservation = (fields: Partial<NewReservationUpdateInput>) => {
        const {
            newReservationQuery: {
                fetchNewReservation
            },
            updateNewReservationMutation
        } = this.props;

        const { id, name,
            hotelName,
            arrivalDate,
            departureDate } = fetchNewReservation!
        const data = { id, name, hotelName, arrivalDate, departureDate, ...fields }
        updateNewReservationMutation({ variables: { data } })
    }


    loadingView = () => <View><Text>Loading...</Text></View>

    render() {

        const {
            newReservationQuery: {

                loading,
                fetchNewReservation
            }
        } = this.props
        if (loading) {
            return this.loadingView()
        }
        if (!fetchNewReservation) {
            this.initialUpdate();
            return this.loadingView();
        }


        const { name, hotelName, arrivalDate, departureDate } = fetchNewReservation!
        //const { name, hotelName, arrivalDate, departureDate } = this.state return this.loadingView()
        return (<View style={styles.container}>


            <Input
                leftIcon={
                    <Icon
                        name="user"
                        type="font-awesome"
                        color="rgba(0, 0, 0, 0.38)"
                        size={25}
                        style={{ backgroundColor: 'transparent' }}
                    />
                }
                placeholder="Name"
                value={name}
                keyboardAppearance="light"
                autoFocus={false}
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="next"
                inputStyle={{ marginHorizontal: 20 }}

                containerStyle={{
                    borderBottomColor: 'rgba(0, 0, 0, 0.38)',
                }}
                onChangeText={(input) => this.updateNewReservation({ name: input })}

            />




            <Input
                leftIcon={
                    <Icon
                        name="building"
                        type="font-awesome"
                        color="rgba(0, 0, 0, 0.38)"
                        size={25}
                        style={{ backgroundColor: 'transparent' }}
                    />
                }
                placeholder="Hotel Name"
                keyboardAppearance="light"
                autoFocus={false}
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="next"
                inputStyle={{ marginHorizontal: 20 }}
                value={hotelName}
                containerStyle={{
                    borderBottomColor: 'rgba(0, 0, 0, 0.38)',
                }}
                onChangeText={(input) => this.updateNewReservation({ hotelName: input })}

            />

            <Input
                leftIcon={
                    <Icon
                        name="calendar"
                        type="font-awesome"
                        color="rgba(0, 0, 0, 0.38)"
                        size={25}
                        style={{ backgroundColor: 'transparent' }}
                    />
                }
                value={arrivalDate}
                keyboardAppearance="light"
                autoFocus={false}
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="next"
                inputStyle={{ marginHorizontal: 20 }}
                placeholder="Arrival Date"
                containerStyle={{
                    borderBottomColor: 'rgba(0, 0, 0, 0.38)',
                }}
                onChangeText={(input) => this.updateNewReservation({ arrivalDate: input })}

            />


            <Input
                leftIcon={
                    <Icon
                        name="calendar"
                        type="font-awesome"
                        color="rgba(0, 0, 0, 0.38)"
                        size={25}
                        style={{ backgroundColor: 'transparent' }}
                    />
                }
                value={departureDate}
                keyboardAppearance="light"
                autoFocus={false}
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="next"
                inputStyle={{ marginHorizontal: 20 }}
                placeholder="Departure Date"
                containerStyle={{
                    borderBottomColor: 'rgba(0, 0, 0, 0.38)',
                }}
                onChangeText={(input) => this.updateNewReservation({ departureDate: input })}

            />


            <Button title={'Make Reservation'} onPress={() => this.createReservation()} />
        </View>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 200,
        paddingHorizontal: 10
    },
    dateInput:
    {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    submit: {

    }

})


export default compose(withFetchNewReservationHOC, withCreateReservationHOC, withUpdateNewReservationHOC)(ReservationEntry)