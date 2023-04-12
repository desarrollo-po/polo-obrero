import { useState } from "react";
import { IconPlayVideo } from "../../Iconos/IconPlayVideo";
import styles from "./IframeVideo-po.module.scss";

export const IframeVideo = ({ url, videoId,}) => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <>
      {showVideo ? (
        <iframe
          className={styles.video}
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <article
          className={styles.iframeVideo}
          onClick={() => setShowVideo(!showVideo)}
        >
          
          <IconPlayVideo />
          <img height="100%" width="100%"  src={url} alt="" />
        </article>
      )}
    </>
  );
};
