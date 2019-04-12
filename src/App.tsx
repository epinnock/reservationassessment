import ApolloClient from "apollo-boost";
import { endpoint } from './constants'
import { Component } from "react";
import React from "react";
import ReservationListings from './screens/resverationlistings'
import { ApolloProvider } from "react-apollo";
import AppNavigator from "./AppNavigator";
const client = new ApolloClient({
    uri: endpoint,
    clientState: {}
});


interface Props { }
export default class App extends Component<Props>{
    render() {
        return (<ApolloProvider client={client}>
            <AppNavigator />
        </ApolloProvider>)
    }
}