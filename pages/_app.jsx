import { Header } from "../components/ui/Header/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <footer></footer>
    </>
  );
}

export default MyApp;
