import Head from "next/head";
import MainContainer from "../components/Containers/MainContainer/MainContainer";
import { Footer } from "../components/ui/Footer/Footer";
import { ListaYouTube } from "../components/ui/ListaYouTube/ListaYouTube";
import { getVideosByPlayList } from "../services/queries/GetVideosByPlayList";
import { Comunicados } from "../components/Regiones/Comunicados/Comunicados";
import { getPostsSuplePolo } from "../services/queries/PostsSuplePolo";
import { SuplePolo } from "../components/Regiones/SuplePolo/SuplePolo";
import { getPostsCategoriaPrensa } from "../services/queries/PostsCategoriaPrensa";
import { BotonMasComunicados } from "../components/ui/BotonMasComunicados/BotonMasComunicados";
import { BotonMasVideos } from "../components/ui/BotonMasVideos/BotonMasVideos";
import { BannerSumateMobile } from "../components/ui/BannerSumateMobile/BannerSumateMobile";
import { BannerSumateWeb } from "../components/ui/BannerSumateWeb/BannerSumateWeb";
import { BotonWsp } from "../components/ui/BotonWsp/BotonWsp";
import { BannerLibroMobile } from "../components/ui/BannerLibroMobile/BannerLibroMobile";
import { BannerLibroWeb } from "../components/ui/BannerLibroWeb/BannerLibroWeb";
import { TapaSuplePolo } from "../components/ui/TapaSuplePoloMobile/TapaSuplePoloMobile";
import { useQuery } from "@apollo/client";
import { Icon } from "@iconify/react";
import { GET_COMUNICADOS_POLO_HOME } from "../services/queries/ComunicadosPoloHome";
import { getComunicadosPO } from "../services/queries/GetComunicadosPO";
import { ComunicadosPO } from "../components/Regiones/ComunicadosPO/ComunicadosPO"

export default function Home({ listaYouTube, listaYouTube1, notasMovPiquetero, comunicadosPO }) {
  const { data, loading, error } = useQuery(GET_COMUNICADOS_POLO_HOME);
  
  return (
    <>
      <Head>
        <title>Polo Obrero</title>
        <meta
          name="description"
          content="Por trabajo genuino. Contra el hambre y la miseria"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="@polo.obrero.3" />
        <meta property="og:url" content="https://poloobrero.org.ar/" />
        <meta property="og:title" content="Polo Obrero" />
        <meta
          property="og:image"
          itemProp="image"
          content="https://ujspo.ar/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-17-at-18.46.25.jpeg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@polo.obrero" />
        <meta property="twitter:url" content="https://poloobrero.org.ar/" />
        <meta property="twitter:title" content="Polo Obrero" />
        <meta
          property="twitter:image"
          content="https://ujspo.ar/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-17-at-18.46.25.jpeg"
        />
        <link rel="icon" content="favicon/favicon.ico" />
      </Head>

      {/* <VideoHome /> */}
      <main>
        <MainContainer>
          <SuplePolo notasMovPiquetero={notasMovPiquetero} />
          
          <ComunicadosPO comunicadosPO={comunicadosPO}/>

          <BannerSumateMobile />
          <BannerSumateWeb />
          {loading ? (
            <div className="loading">
              <Icon
                icon="eos-icons:bubble-loading"
                color="white"
                width="50"
                hFlip={true}
              />
            </div>
          ) : (
            <Comunicados comunicadosPolo={data.comunicados} />
          )}
          
          <BotonMasComunicados />
          <ListaYouTube listaYouTube={listaYouTube} />
          <BotonMasVideos />
          <ListaYouTube listaYouTube={listaYouTube1} />
          <BotonMasVideos />
          <BannerLibroWeb />
          <BannerLibroMobile />
          <BotonWsp />
        </MainContainer>
      </main>
      <Footer />

      <style jsx>{`
        .loading {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </>
  );
}

export async function getServerSideProps() {
  const listaYouTube = await getVideosByPlayList(
    "PLcZulwVPWcU11toaBlOAHkjsRtgkg8Y-y",
    3
  );
  const listaYouTube1 = await getVideosByPlayList(
    "PLMxlm23AqeDKnrXPJA3absawM07PSXwMA&si=pE5HLRLEdvfpyeaU",
    3
  );
  const notasSuplePolo = await getPostsSuplePolo(5);
  const notasMovPiquetero = await getPostsCategoriaPrensa(
    "movimiento-piquetero",
    5
  );
  const comunicadosPO = await getComunicadosPO("polo-obrero", 4);
  
  return {
    props: {
      listaYouTube,
      listaYouTube1,
      notasSuplePolo: notasSuplePolo.prensaNumeros,
      notasMovPiquetero: notasMovPiquetero.posts,
      comunicadosPO: comunicadosPO.posts,
    },
  };
}
