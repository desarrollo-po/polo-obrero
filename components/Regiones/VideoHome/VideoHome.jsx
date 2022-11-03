import React from "react";
import MainContainer from "../../Containers/MainContainer/MainContainer";
import styles from "./videohome.module.scss";

const VideoHome = () => {
  return (
    <>
      <p className={styles.texto1}>LUCHAMOS POR TRABAJO GENUINO</p>
      <div className={styles.containerVideo}>
        <video
          src="https://po-proyecto.tk/wp-content/uploads/2022/11/y2mate.com-Por-trabajo-genuino-Masiva-movilizacion-del-Polo-Obrero_1080p-online-video-cutter.com-1.mp4"
          type="video/mp4"
          muted
          autoPlay={"autoplay"}
          preLoad="auto"
          loop
        ></video>
      </div>
    </>
  );
};

export default VideoHome;
