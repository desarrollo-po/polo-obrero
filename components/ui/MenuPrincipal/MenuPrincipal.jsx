import React from 'react'
import styles from "./MenuPrincipal.module.scss"

const MenuPrincipal = () => {
return (
    <nav className={styles.nav}>
        <ul>
            <li><a href="#">ÚLTIMAS NOTICIAS</a></li>
            <li><a href="#">MEDIOS</a></li>
            <li><a href="#">COMUNICADOS</a></li>
            <li><a href="#">LOCALES</a></li>
            <li><a href="#">CONTACTO</a></li>
        </ul>
    </nav>
)
}

export default MenuPrincipal
