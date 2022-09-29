import React from 'react'
import styles from "./MenuPrincipal.module.scss"

const MenuPrincipal = () => {
return (
    <nav className={styles.nav}>
        <ul>
            <li>ÚLTIMAS NOTICIAS</li>
            <li>MEDIOS</li>
            <li>COMUNICADOS</li>
            <li>LOCALES</li>
            <li>CONTACTO</li>
        </ul>
    </nav>
)
}

export default MenuPrincipal
