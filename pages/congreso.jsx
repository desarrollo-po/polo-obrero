import Head from 'next/head';
import React from "react";
import MainContainer from '../components/Containers/MainContainer/MainContainer';
import { Footer } from '../components/ui/Footer/Footer';
import styles from "../styles/Congreso.module.scss";

const congreso = () => {
    return (
        < >
        <Head>
            <title>Congreso</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <MainContainer>
        <h1 className={styles.titulo}>Congreso</h1>
        <div className={styles.iframe}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/YNiNYjs73aE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </MainContainer>
        <Footer />
        </>
    )
}

export default congreso