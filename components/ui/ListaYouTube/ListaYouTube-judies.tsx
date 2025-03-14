import { IframeVideoJudies } from "../IframeVideo/IframeVideo-judies";
import styles from "./ListaYouTube-judies.module.scss";

export const ListaYouTubeJudies = ({ listaYouTubeJudies }) => {
  return (
    <>
      <section className={styles.listaYouTubeJudies}>
        {listaYouTubeJudies.items.map(
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
            <IframeVideoJudies key={id} url={url} videoId={videoId} />
            );
          }
        )}
      </section>
    </>
  );
};
