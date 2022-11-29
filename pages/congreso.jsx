import Head from 'next/head';
import React from "react";
import MainContainer from '../components/Containers/MainContainer/MainContainer';
import { TarjetaChicaConFoto } from '../components/Tarjetas/TarjetaChicaConFoto/TarjetaChicaConFoto';
import { Footer } from '../components/ui/Footer/Footer';
import { getPostsByTag } from '../services/queries/PostsByTag';
import styles from "../styles/Congreso.module.scss";

export default function Congreso({ notasCongreso }) {
    console.log(notasCongreso, "notassss")
    return (
        <>
            <Head>
                <title>Congreso</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainContainer>
            <h1 className={styles.titulo}>Congreso del Polo Obrero</h1>
                <div className={styles.containerNota}>
                    {notasCongreso.edges.map(({
                         node: {
                            id,
                            title,
                            slug,
                            campos: { volanta, descripcionDestacado },
                            featuredImage: {
                            node: { sourceUrl },
                            },
                        },
                        })=> (
                        <TarjetaChicaConFoto
                            key={id}
                            titulo={title}
                            imagen={sourceUrl}
                            slug={slug}
                            volanta={volanta}
                            descripcionDestacado={descripcionDestacado}
                        />
                        )
                    )}  
                </div>
            </MainContainer>
            <Footer />
        </>
    )
}

export async function getStaticProps() {
    const notasCongreso = await getPostsByTag("congreso-del-polo-obrero");
    return {
        props: {
            notasCongreso: notasCongreso.posts,     
         },
    };
}