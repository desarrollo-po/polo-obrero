import { IframeVideo } from "../IframeVideo/IframeVideo";
import styles from "./ListaYouTube.module.scss";

export const ListaYouTube = ({ listaYouTube }) => {
  return (
    <>
      <h2 className={styles.titulo}>El Polo Obrero en los Medios</h2>
      <section className={styles.listaYouTube}>
        {listaYouTube.items.map(
          ({
            id,
            snippet: {
              title,
              resourceId: { videoId },
              thumbnails: {
                medium: { url },
              },
            },
          }) => {
            return (
              <IframeVideo key={id} title={title} url={url} videoId={videoId} />
            );
          }
        )}
      </section>
    </>
  );
};
