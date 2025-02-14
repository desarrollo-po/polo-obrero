import { TarjetaSuplePolo } from "../../Tarjetas/TarjetaSuplePolo/TarjetaSuplePolo";
import styles from "./SuplePolo.module.scss";

export const SuplePolo = ({ notasMovPiquetero }) => {

  return (
    <section className={styles.suplePolo}>
      {notasMovPiquetero.edges
        // .filter((nota) => nota.node.title !== "NOTIPOLO")
        .map(
          ({
            node: {
              id,
              title,
              link,
              featuredImage: {
                node: { sourceUrl },
              },
              campos: { volanta, descripcionDestacado },
            },
          }) => (
            <TarjetaSuplePolo
              key={id}
              titulo={title}
              imagen={sourceUrl}
              link={link}
              volanta={volanta}
              descripcionDestacado={descripcionDestacado}
            />
          )
        )}
    </section>
  );
};
