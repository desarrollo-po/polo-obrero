import Link from "next/link";
import styles from "./tarjetaComunicados.module.scss";

export const TarjetaComunicados = ({
  titulo,
  imagen,
  slug,
  volanta,
  descripcionDestacado,
}) => {
  return (
    <>
      <article className={styles.tarjetaComunicados}>
        {volanta?.length > 0 ? (
          <div className={styles.volanta}>
            <span>{volanta.toUpperCase()}</span>
          </div>
        ) : (
          !volanta
        )}
        <picture className={styles.contenedorImagen}>
          <img
            className={styles.imagen}
            src={imagen || "https://via.placeholder.com/400"}
          />
        </picture>
        <div className={styles.data}>
          <Link href={`https://po.org.ar/comunicados/${slug}`}>
            <a target="_blank">
              <h3>{titulo}</h3>
            </a>
          </Link>
          <p>{descripcionDestacado}</p>
        </div>
      </article>
    </>
  );
};
