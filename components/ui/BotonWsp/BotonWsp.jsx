import IconWsp from "../../Iconos/IconWsp";
import styles from "./BotonWsp.module.scss"

export const BotonWsp = () => {
    return (
        <div className={styles.btnWsp} target="_blank"> 
            <a href="https://wa.me/+5491158292656">
                <IconWsp size="100"/>
            </a>
        </div>
    );
};