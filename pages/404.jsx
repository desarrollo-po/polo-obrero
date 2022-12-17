import Head from "next/head";
import React from "react";
import MainContainer from "../components/Containers/MainContainer/MainContainer";
import styles from "../styles/404.module.scss";

const pageNotFound= () => {
    return (
        < >
            <Head>
                <title>😅 404. Ouch! Página no encontrada.</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainContainer>
                
                <div className={styles.paginaNoEncontrada}>
                    <h3>404 - Página no encontrada</h3>
                </div>
                <div className={styles.volver}>
                    
                        <a>
                        Volver a la página principal
                        </a>
                    
                </div>
            </MainContainer>
        </>
    );
};

export default pageNotFound;