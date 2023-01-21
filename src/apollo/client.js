import { ApolloClient,createHttpLink, InMemoryCache } from '@apollo/client';
import CONFIG from "../config";

import { setContext } from '@apollo/client/link/context';

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // return the headers to the context so httpLink can read them
  console.log({ACCESSTOKEN})
  return {
    headers: {
      ...headers,
      authorization: ACCESSTOKEN ? `Bearer ${ACCESSTOKEN}` : "",
    }
  }
});

const httpLink = createHttpLink({
  uri:CONFIG.API_URL,
  
});

let ACCESSTOKEN;
export const getApolloClient = () => {
  if (typeof window !== "undefined") {

    ACCESSTOKEN  = localStorage.getItem('accessToken')
    
    }
 
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });
};

