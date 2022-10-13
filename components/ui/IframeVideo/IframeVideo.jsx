import { useState } from "react";
import { IconPlayVideo } from "../../Iconos/IconPlayVideo";
import styles from "./IframeVideo.module.scss";

export const IframeVideo = ({ url, videoId, title }) => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <>
      {showVideo ? (
        <iframe
          className={styles.video}
          width="100%"
          height="215"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <article
          className={styles.iframeVideo}
          onClick={() => setShowVideo(!showVideo)}
        >
          <div className={styles.data}>{title}</div>
          <IconPlayVideo />
          <img height="215" src={url} alt="" />
        </article>
      )}
    </>
  );
};
