import React from 'react'
import styles from "./Footer.module.scss"
import MainContainer from '../../Containers/MainContainer/MainContainer'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <MainContainer>
                <nav>
                    <ul>
                        <li><a href="#">ÚLTIMAS NOTICIAS</a></li>
                        <li><a href="#">MEDIOS</a></li>
                        <li><a href="#">COMUNICADOS</a></li>
                        <li><a href="#">LOCALES</a></li>
                        <li><a href="#">CONTACTO</a></li>
                    </ul>
                </nav>
            </ MainContainer>
        </footer>
    )
}
