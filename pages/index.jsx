import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import MainContainer from "../components/Containers/MainContainer/MainContainer";
import { getPostsByRegion } from "../services/queries/PostsByRegion";
import styles from "../styles/Home.module.css";
import { Notas3Principales } from "../components/Regiones/Notas3Principales/Notas3Principales";
import MenuPrincipal from "../components/ui/MenuPrincipal/MenuPrincipal";
import { NotasSubDestacadas } from "../components/Regiones/NotasSubDestacadas/NotasSubDestacadas";
import { Footer } from "../components/ui/Footer/Footer";
import { Banners } from "../components/ui/Banners/Banners";
import { ListaYouTube } from "../components/ui/ListaYouTube/ListaYouTube";
import { getVideosByPlayList } from "../services/queries/GetVideosByPlayList";
import { getComunicadosPO } from "../services/queries/ComunicadosPO";
import { Comunicados } from "../components/Regiones/Comunicados/Comunicados";
import { Formulario } from "../components/ui/Formulario/Formulario";

export default function Home({
  notasSubDestacadas,
  notas3Principales,
  comunicadosPO,
  listaYouTube,
}) {
  return (
    <>
      <Head>
        <title>Página demostración taller prensa obrera.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainContainer>
          {notas3Principales.regiones.nodes[0].estado_de_la_region
            .estadoDeLaRegion && (
            <Notas3Principales notas3Principales={notas3Principales.posts} />
          )}
          <NotasSubDestacadas notasSubDestacadas={notasSubDestacadas} />
          <Banners />
          <ListaYouTube listaYouTube={listaYouTube} />
          <Comunicados comunicadosPO={comunicadosPO} />
          <Formulario />
        </MainContainer>
      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const notasSubDestacadas = await getPostsByRegion("notas-sub-destacadas", 3);
  const notas3Principales = await getPostsByRegion("3-notas-principales", 3);
  const listaYouTube = await getVideosByPlayList(
    "PLcZulwVPWcU11toaBlOAHkjsRtgkg8Y-y",
    3
  );
  const comunicadosPO = await getComunicadosPO(6);
  return {
    props: {
      notasSubDestacadas: notasSubDestacadas.posts,
      notas3Principales,
      comunicadosPO: comunicadosPO.posts,
      listaYouTube,
    },
  };
}
