import { IframeVideoJudies } from "../IframeVideo/IframeVideo-judies";
import styles from "./ListaYouTube-po.module.scss";

export const ListaYouTubeJudies = ({ listaYouTube }) => {
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
            return <IframeVideoJudies key={id} url={url} videoId={videoId} />;
          }
        )}
      </section>
    </>
  );
};
