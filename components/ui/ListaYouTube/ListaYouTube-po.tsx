import { IframeVideo } from "../IframeVideo/IframeVideo-po";
import styles from "./ListaYouTube-po.module.scss";

export const ListaYouTube = ({ listaYouTube }) => {
  return (
    <>
      <section className={styles.listaYouTube}>
        {listaYouTube.items.map(
          ({
            id,
            snippet: {
              resourceId: { videoId },
              thumbnails: {
                medium: { url },
              },
            },
          }) => {
            return (
              <IframeVideo key={id} url={url} videoId={videoId} />
            );
          }
        )}
      </section>
    </>
  );
};
