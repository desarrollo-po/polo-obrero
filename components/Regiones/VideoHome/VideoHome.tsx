import React from "react";
import MainContainer from "../../Containers/MainContainer/MainContainer";
import styles from "./videohome.module.scss";

const VideoHome = () => {
  return (
    <>
      <div className={styles.containerVideo}>
        <div className={styles.containertexto}>
          <h1 className={styles.texto1}>LUCHAMOS POR TRABAJO GENUINO</h1>
        </div>

        <video
          src="https://po-proyecto.tk/wp-content/uploads/2022/11/y2mate.com-Por-trabajo-genuino-Masiva-movilizacion-del-Polo-Obrero_1080p-online-video-cutter.com-1.mp4"
          muted
          autoPlay
          loop
        ></video>
      </div>
      {/* <style>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
</style> */}
    </>
  );
};

export default VideoHome;
