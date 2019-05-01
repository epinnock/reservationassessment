import React, { PureComponent } from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation'
import withReservations, { ReservationChildProps } from './graphql/hoc/withreservations';
import Reservation from './components/reservation';

export interface Props extends ReservationChildProps, NavigationInjectedProps { }
export class ReservationListings extends PureComponent<Props>{

    render() {
        const { error, reservations } = this.props.data;
        if (error) return this.errorView();
        return this.generateFlatList();

    }

    fetchMoreReservations = () => {
        const { reservations, fetchMore } = this.props.data;
        fetchMore({
            variables: {
                skip: reservations!.length
            },
            updateQuery: (previousResults, { fetchMoreResult }) => {
                if (!fetchMoreResult) {
                    return previousResults
                }
                return { ...previousResults, reservations: [...previousResults.reservations, ...fetchMoreResult.reservations] }
            },
        })
    }

    generateFlatList = (): JSX.Element => {
        const { reservations, refetch, networkStatus } = this.props.data;
        return (<FlatList
            style={style.container}
            data={[...new Set(reservations!)]}
            renderItem={({ item }) => <Reservation reservation={item} />}
            keyExtractor={item => item!.id}
            refreshing={networkStatus == 4}
            onEndReached={this.fetchMoreReservations}
            onEndReachedThreshold={0.7}
            onRefresh={() => refetch()}
        />)
    }


    errorView = () => {
        return (
            <View>
                <Text>Error :(</Text>
            </View>
        );
    };


}
const style = StyleSheet.create({
    container: {
        backgroundColor: '#CCCCCC4F'
    },
    errorcontainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorfont: {
        fontSize: 40,
        color: '#f00'
    }
});
export default withReservations(ReservationListings)