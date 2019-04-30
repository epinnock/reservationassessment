import ApolloClient from "apollo-boost";
import { endpoint } from './constants'
import { Component } from "react";
import React from "react";
import { ApolloProvider } from "react-apollo";
import AppNavigator from "./AppNavigator";
import defaults from './screens/reservationentry/graphql/default'
import resolvers from './graphql/resolvers'
const client = new ApolloClient({
    uri: endpoint,
    clientState: { defaults, resolvers },

});


interface Props { }
export default class App extends Component<Props>{
    render() {
        return (<ApolloProvider client={client}>
            <AppNavigator />
        </ApolloProvider>)
    }
}