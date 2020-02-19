import { ApolloClient, HttpLink, split } from "apollo-boost";
import { WebSocketLink } from "apollo-link-ws";
import { onError } from "apollo-link-error";
import { getMainDefinition } from "apollo-utilities"
import { InMemoryCache } from "apollo-cache-inmemory";
import { persistCache } from "apollo-cache-persist";
import { AsyncStorage } from "react-native";

const httpLink = new HttpLink({
    uri: "http://localhost:4000"
});

const wsLink = new WebSocketLink({
    uri: `ws://localhost:4000/`,
    options: {
        reconnect: true
    }
});

const cache = new InMemoryCache();

persistCache({
    cache,
    storage: AsyncStorage
});

const link = split(
    ({ query }) => {
        const destination = getMainDefinition(query);
        return (
            destination.kind === "OperationDefinition" &&
            destination.operation === "subscription"
        );
    },
    wsLink,
    httpLink
);

const client = new ApolloClient({
    link,
    cache,
    request: async operation => {
        const token = await AsyncStorage.getItem("jwt");
        return operation.setContext({
            headers: { Authorization: `Bearer ${token}` }
        });
    }
});

export default client;