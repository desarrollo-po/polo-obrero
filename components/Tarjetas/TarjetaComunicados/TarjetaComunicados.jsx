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
    <article className={styles.tarjetaComunicados}>
      <Link href={`/comunicados/${slug}`}>
        <a>
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
            <h3>{titulo}</h3>

            <p>{descripcionDestacado}</p>
          </div>
        </a>
      </Link>
    </article>
  );
};
