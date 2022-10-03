import React, { useState } from "react";
import styles from "./IframeVideo.module.scss";

export const IframeVideo = ({ url, videoId }) => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <>
      {showVideo ? (
        <iframe
          className={styles.video}
          width="100%"
          height="215"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <article
          className={styles.iframeVideo}
          onClick={() => setShowVideo(!showVideo)}
        >
          <img height="215" src={url} alt="" />
        </article>
      )}
    </>
  );
};
