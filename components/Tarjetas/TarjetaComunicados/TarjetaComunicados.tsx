import Link from "next/link";
import styles from "./tarjetaComunicados.module.scss";

const formatDate = (date) => {
  const newDate = new Date(date);
  return `${newDate.getDate()}/${
    newDate.getMonth() + 1
  }/${newDate.getFullYear()}`;
};

export const TarjetaComunicados = ({ titulo, imagen, slug, volanta, date }) => {
  return (
    <article className={styles.tarjetaComunicados}>
      <Link href={`http://po.org.ar/comunicados/${slug}`}>
        <a>
          <div className={styles.date}>
            <span>{formatDate(date)}</span>
          </div>

          <picture className={styles.contenedorImagen}>
            <img
              className={styles.imagen}
              src={imagen || "https://via.placeholder.com/400"}
            />
          </picture>

          <div className={styles.data}>
            {volanta?.length > 0 ? (
              <p id={styles.volanta}>{volanta.toUpperCase()}</p>
            ) : (
              !volanta
            )}
            <h3>{titulo}</h3>
          </div>
        </a>
      </Link>
    </article>
  );
};
