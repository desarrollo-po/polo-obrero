import { Header } from "../components/ui/Header/Header";
import "../styles/globals.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export const client = new ApolloClient({
  connectToDevTools: true,
  uri: process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL,
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Component {...pageProps} />
      <footer></footer>
    </ApolloProvider>
  );
}

export default MyApp;
