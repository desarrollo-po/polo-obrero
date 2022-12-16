import Head from "next/head";
import MainContainer from "../components/Containers/MainContainer/MainContainer";
import { Footer } from "../components/ui/Footer/Footer";
import { Banners } from "../components/ui/Banners/Banners";
import { ListaYouTube } from "../components/ui/ListaYouTube/ListaYouTube";
import { getVideosByPlayList } from "../services/queries/GetVideosByPlayList";
import { getComunicadosPolo } from "../services/queries/PostsComunicados";
import { Comunicados } from "../components/Regiones/Comunicados/Comunicados";
import { getPostsSuplePolo } from "../services/queries/PostsSuplePolo";
import { SuplePolo } from "../components/Regiones/SuplePolo/SuplePolo";
import { NotasMovPiquetero } from "../components/Regiones/NotasMovPiquetero/NotasMovPiquetero";
import { getPostsCategoriaPrensa } from "../services/queries/PostsCategoriaPrensa";
import { BotonMasComunicados } from "../components/ui/BotonMasComunicados/BotonMasComunicados";
import { BotonMasVideos } from "../components/ui/BotonMasVideos/BotonMasVideos";
import { BannerSumateMobile } from "../components/ui/BannerSumateMobile/BannerSumateMobile";
import { BannerSumateWeb } from "../components/ui/BannerSumateWeb/BannerSumateWeb";
import { BotonWsp } from "../components/ui/BotonWsp/BotonWsp";
import { BannerLibroMobile } from "../components/ui/BannerLibroMobile/BannerLibroMobile";
import { BannerLibroWeb } from "../components/ui/BannerLibroWeb/BannerLibroWeb";
// import VideoHome from "../components/Regiones/VideoHome/VideoHome";
import { TapaSuplePolo } from "../components/ui/TapaSuplePoloMobile/TapaSuplePoloMobile";
import { BannerAuditoriasMobile } from "../components/ui/BannerAuditoriasMobile/BannerAuditoriasMobile";
import { BannerAuditoriasWeb } from "../components/ui/BannerAuditoriasWeb/BannerAuditoriasWeb";

export default function Home({
  comunicadosPolo,
  listaYouTube,
  notasSuplePolo,
  notasMovPiquetero,
}) {
  return (
    <>
      <Head>
        <title>Polo Obrero</title>
        <meta name="description" content="Por trabajo genuino. Contra el hambre y la miseria" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="@polo.obrero.3" />
        <meta property="og:url" content="https://poloobrero.org.ar/" />
        <meta property="og:title" content="Polo Obrero" />
        {/* <meta property="og:description" content={volanta} /> */}
        <meta property="og:image" itemProp="image" content="favicon/favicon.ico" />
  
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@polo.obrero" />
        <meta
          property="twitter:url"
          content="https://poloobrero.org.ar/"
        />
        <meta property="twitter:title" content="Polo Obrero" />
        {/* <meta property="twitter:description" content={volanta} /> */}
        <meta property="twitter:image" content="favicon/favicon.ico" />
        {/* <meta property="description" content={volanta} /> */}
        {/* <meta name="description" content={seo.metaDesc} /> */}
        <link rel="icon" href="favicon/favicon.ico" />
      </Head>

      {/* <VideoHome /> */}
      <main>
        <MainContainer>
          <BannerAuditoriasWeb />
          <BannerAuditoriasMobile />
          <SuplePolo notasSuplePolo={notasSuplePolo.edges[0].node.posts} />
          <BannerSumateMobile />
          <BannerSumateWeb />
          <TapaSuplePolo
            slug={notasSuplePolo.edges[0].node.slug}
            tapaSuplePolo={
              notasSuplePolo.edges[0].node.datosDePrensaNumero.imagenTapa
                .sourceUrl
            }
          />
          <Comunicados comunicadosPolo={comunicadosPolo} />
          <BotonMasComunicados />
          <ListaYouTube listaYouTube={listaYouTube} />
          <BotonMasVideos />
          <BannerLibroWeb />
          <BannerLibroMobile />
          <BotonWsp />
        </MainContainer>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const listaYouTube = await getVideosByPlayList(
    "PLcZulwVPWcU11toaBlOAHkjsRtgkg8Y-y",
    3
  );
  const notasSuplePolo = await getPostsSuplePolo("1659SP", 5);
  const comunicadosPolo = await getComunicadosPolo(4);
  const notasMovPiquetero = await getPostsCategoriaPrensa(
    "movimiento-piquetero",
    3
  );

  return {
    props: {
      comunicadosPolo: comunicadosPolo.comunicados,
      listaYouTube,
      notasSuplePolo: notasSuplePolo.prensaNumeros,
      notasMovPiquetero: notasMovPiquetero.posts,
    },
  };
}