import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import MainContainer from "../components/Containers/MainContainer/MainContainer";
import { SubDestacadas2 } from "../components/Regiones/SubDestacadas2/SubDestacadas2";
import { CuadriculaSinImagen } from "../components/Regiones/CuadriculaSinImagen/CuadriculaSinImagen";
import { Notas4SinFoto } from "../components/Regiones/Notas4SinFoto/Notas4SinFoto";
import { Notas4ConFoto } from "../components/Regiones/Notas4ConFoto/Notas4ConFoto";
import { WORDPRESS_API_POSTS, WORDPRESS_API_URL } from "../constants";
import { getPostsByRegion } from "../services/queries/PostsByRegion";
import styles from "../styles/Home.module.css";
import { Notas3Principales } from "../components/Regiones/Notas3Principales/Notas3Principales";
import MenuPrincipal from "../components/ui/MenuPrincipal/MenuPrincipal";

export default function Home({
  subDestacadas2,
  notas3Principales,
  notas4SinFoto,
  notas4ConFoto,
  cuadriculaSinImagen,
}) {
  return (
    <>
      <Head>
        <title>Página demostración taller prensa obrera</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MenuPrincipal />
      <main>
        <MainContainer>
          <h1>Página demo taller Polo Obrero</h1>
          <Notas3Principales notas3Principales={notas3Principales} />
          {notas4SinFoto.edges.length > 0 && (
            <Notas4SinFoto notas4SinFoto={notas4SinFoto} />
          )}
          <SubDestacadas2 subDestacadas2={subDestacadas2} />

          {notas4ConFoto.edges.length > 0 && (
            <Notas4ConFoto notas4ConFoto={notas4ConFoto} />
          )}

          <CuadriculaSinImagen cuadriculaSinImagen={cuadriculaSinImagen} />
        </MainContainer>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const subDestacadas2 = await getPostsByRegion("2-sub-destacado-4", 2);
  const notas3Principales = await getPostsByRegion("3-notas-principales", 3);
  const notas4SinFoto = await getPostsByRegion("4-columas-sin-texto", 4);
  const notas4ConFoto = await getPostsByRegion("4-columnas-con-foto", 4);
  const cuadriculaSinImagen = await getPostsByRegion(
    "cuadricula-sin-imagen",
    4
  );
  return {
    props: {
      subDestacadas2: subDestacadas2.posts,
      notas3Principales: notas3Principales.posts,
      notas4SinFoto: notas4SinFoto.posts,
      notas4ConFoto: notas4ConFoto.posts,
      cuadriculaSinImagen: cuadriculaSinImagen.posts,
    },
  };
}
