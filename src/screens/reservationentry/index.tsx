import React, { Component, PureComponent } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import withCreateReservationHOC, { withCreateReservationProps } from './graphql/hoc/withcreateReservation'
import { NavigationInjectedProps } from 'react-navigation'
import { compose } from 'react-apollo';
import { Input, Icon } from 'react-native-elements';
export interface Props extends withCreateReservationProps, NavigationInjectedProps { }

class NewReservation extends PureComponent<Props>{
    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
            name: '',
            hotelName: '',
            arrivalDate: '',
            departureDate: '',

        }
    }

    createReservation = async () => {
        const { name, hotelName, arrivalDate, departureDate } = this.state;

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


        this.setState({
            name: '',
            hotelName: '',
            arrivalDate: '',
            departureDate: ''
        });
        this.props.navigation.goBack();
    }



    render() {
        const { name, hotelName, arrivalDate, departureDate } = this.state;
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
                onChangeText={(input) => this.setState({ name: input })}

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
                onChangeText={(input) => this.setState({ hotelName: input })}

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
                onChangeText={(input) => this.setState({ arrivalDate: input })}

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
                onChangeText={(input) => this.setState({ departureDate: input })}

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


export default compose(withCreateReservationHOC)(NewReservation)