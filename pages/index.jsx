import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import MainContainer from "../components/Containers/MainContainer/MainContainer";
import { WORDPRESS_API_POSTS, WORDPRESS_API_URL } from "../constants";
import { getPostsByRegion } from "../services/queries/PostsByRegion";
import styles from "../styles/Home.module.css";

export default function Home({
  subDestacadas2,
  notas3Principales,
  notas4SinFoto,
}) {
  console.log(notas4SinFoto);
  return (
    <>
      <Head>
        <title>Página demostración taller prensa obrera</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainContainer>
          <h1>Página demo taller Polo Obrero</h1>
          <ul>
            {notas4SinFoto.edges.map((item) => (
              <li>
                <Link href={`/notas/${item.node.slug}`}>
                  <a>{item.node.title}</a>
                </Link>
              </li>
            ))}
          </ul>
          <ul>
            {notas3Principales.edges.map((item) => (
              <li>{item.node.title}</li>
            ))}
          </ul>
          <ul>
            {subDestacadas2.edges.map((item) => (
              <li>{item.node.title}</li>
            ))}
          </ul>
        </MainContainer>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const subDestacadas2 = await getPostsByRegion("2-sub-destacado-4", 5);
  const notas3Principales = await getPostsByRegion("3-notas-principales", 2);
  const notas4SinFoto = await getPostsByRegion("4-columas-sin-texto", 4);
  return {
    props: {
      subDestacadas2: subDestacadas2.posts,
      notas3Principales: notas3Principales.posts,
      notas4SinFoto: notas4SinFoto.posts,
    },
  };
}
