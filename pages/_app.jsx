import { Header } from "../components/ui/Header/Header";
import "../styles/globals.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { NotasGuardadasContextProvider } from "../context/NotasGuardadasProvider";

export const client = new ApolloClient({
  connectToDevTools: true,
  uri: process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL,
  cache: new InMemoryCache(),
});
export const clientPO = new ApolloClient({
  connectToDevTools: true,
  uri: process.env.NEXT_PUBLIC_PO_WORDPRESS_GRAPHQL,
  cache: new InMemoryCache(),
});
export const clientPRENSA = new ApolloClient({
  connectToDevTools: true,
  uri: process.env.NEXT_PUBLIC_PRENSA_WORDPRESS_GRAPHQL,
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider
      clientPRENSA={clientPRENSA}
      clientPO={clientPO}
      client={client}
    >
      <NotasGuardadasContextProvider>
        <Header />
        <Component {...pageProps} />
        <footer></footer>
      </NotasGuardadasContextProvider>
    </ApolloProvider>
  );
}

export default MyApp;
