import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import { UseWalletProvider } from "use-wallet";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import client, { GetUser } from "./apollo";
import config from "./config";

ReactDOM.render(
 
    <ApolloProvider client={client}>
      <Provider store={store}>
        <UseWalletProvider
          chainId={config.CHAIN_ID}
          connectors={{
            // This is how connectors get configured
            portis: { dAppId: "my-dapp-id-123-xyz" },
          }}
        >
          <App />
        </UseWalletProvider>
      </Provider>
    </ApolloProvider>
 ,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
