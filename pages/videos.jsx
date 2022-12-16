import Head from 'next/head'
import React from 'react'
import MainContainer from '../components/Containers/MainContainer/MainContainer'
import { Footer } from '../components/ui/Footer/Footer'
import styles from "../styles/Medios.module.scss"
import { ListaYouTube } from "../components/ui/ListaYouTube/ListaYouTube";
import { getVideosByPlayList } from "../services/queries/GetVideosByPlayList";

export default function Medios({
  listaYouTube,
}) {
  console.log( listaYouTube );
  return (
    <>
      <Head>
        <title>Polo Obrero - Videos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainContainer>
          <h1 className={styles.titulo}>Nuestros videos</h1>
          <ListaYouTube listaYouTube={listaYouTube} />
        </MainContainer>
      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const listaYouTube = await getVideosByPlayList(
    "PLcZulwVPWcU11toaBlOAHkjsRtgkg8Y-y",
    9
  );
  return {
    props: {
      listaYouTube,
    },
  };
}
