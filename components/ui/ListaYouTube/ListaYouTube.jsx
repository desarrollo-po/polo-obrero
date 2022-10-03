import { IframeVideo } from "../IframeVideo/IframeVideo";
import styles from "./ListaYouTube.module.scss";

export const ListaYouTube = ({ listaYouTube }) => {
  console.log("listaYouTube", listaYouTube);
  return (
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
          return <IframeVideo key={id} url={url} videoId={videoId} />;
        }
      )}
    </section>
  );
};
