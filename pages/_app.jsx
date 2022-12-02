import { Header } from "../components/ui/Header/Header";
import "../styles/globals.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { NotasGuardadasContextProvider } from "../context/NotasGuardadasProvider";
import Script from "next/script";
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_MEASUREMENT_ID;


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
          <Script
    src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
    strategy="afterInteractive"
  />
  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}');
    `}
  </Script>

        <Header/>
        <Component {...pageProps} />
        <footer></footer>
      </NotasGuardadasContextProvider>
    </ApolloProvider>
  );
}

export default MyApp;
