import React from 'react'
import MainContainer from '../components/Containers/MainContainer/MainContainer'
import styles from "../styles/Medios.module.scss"
import { ListaYouTube } from "../components/ui/ListaYouTube/ListaYouTube";
import { getVideosByPlayList } from "../services/queries/GetVideosByPlayList";

export default function Medios({
  listaYouTube,
}) {
  console.log( listaYouTube );
  return (
    <>

      <main>
        <MainContainer>
          <div className={styles.containerTitulo}>
          <h1 className={styles.titulo}>Nuestros videos</h1>
          </div>
          <ListaYouTube listaYouTube={listaYouTube} />

        </MainContainer>
      </main>
      <style jsx global>{`
        header {
          display: none !important;
        }
      `}</style>
    </>
  );
}

export async function getServerSideProps() {
  const listaYouTube = await getVideosByPlayList(
    "PLcZulwVPWcU2K9TOT8Qt-lgrDjU8EQMSP",
    9
  );
  return {
    props: {
      listaYouTube,
    },
  };
}
