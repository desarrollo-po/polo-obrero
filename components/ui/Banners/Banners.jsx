import React from "react";

import styles from "./banners.module.scss";

export const Banners = () => {
  return (
    <>
      <section className={styles.banner}>
        <div className={styles.texto}>
          <h3 className={styles.titulo}>Historia del Movimiento Piquetero:</h3>
          <p className={styles.data}>
            La oportunidad de publicar esta tercera edición de Una historia del
            movimiento piquetero es acercar a los lectores una comprensión de la
            naturaleza y el rol de este movimiento, del desarrollo y las luchas
            que lo llevaron hasta aquí. El gran trabajo de Luis Oviedo, una
            contribución a una conciencia y una visión socialista del fenómeno,
            adquiere un nuevo relieve. Estos veinte años han puesto a prueba sus
            conclusiones y el texto sale airoso de la prueba más ácida, la de la
            vida misma.
            <br></br>
            <br></br>
            La tesis central de Oviedo es que el movimiento piquetero es la más
            genuina creación de la clase obrera en los últimos 25 años. La
            tensión entre la independencia política del movimiento piquetero y
            la tendencia a la cooptación del Estado recorre toda la rica
            historia del movimiento. Su investigación y conclusiones son, tal
            vez, el gran aporte de estas páginas. Oviedo reflejó la experiencia
            de siete Asambleas Nacionales de Trabajadores, fragua de grandes
            luchas del post Argentinazo. Ese método ha vuelto sobre nuevas bases
            y se expresó en el gran Plenario Nacional de la Unidad Piquetera en
            Plaza de Mayo, en marzo de este año 2022, con 3.500 delegados de
            todo el país, de decenas de organizaciones que conforman el frente
            único de lucha. Oviedo coloca a las jornadas del movimiento
            piquetero en las grandes tradiciones del movimiento obrero. Sin
            duda, desde el Cordobazo no había un proceso de esta magnitud en el
            seno de la clase obrera. Deja planteado un desafío que Kane y
            Belliboni colocan en su texto:
            <br></br>
            <br></br>
            “El movimiento piquetero entendido como la acción consciente de los
            desocupados y precarizados como parte de la clase obrera… o se
            constituye en correa de trasmisión del asistencialismo, como quieren
            Cristina Kirchner y todo el régimen político patronal, o se
            constituye en un factor de lucha por las reivindicaciones, en ese
            camino une sus fuerzas a la clase obrera ocupada mediante un
            programa común y discute una salida para los trabajadores mediante
            un gobierno de trabajadores”. A esta última perspectiva adscribe el
            texto que presentamos de principio a fin.
            <br></br>
            <br></br>
            Del prólogo de Néstor Pitrola
          </p>
        </div>
        <picture className={styles.imagen}>
          <img src="../../../imgs/historia-movimiento-piquetero.jpg" />
        </picture>
      </section>
      <a
        className={styles.comprar}
        href="https://revistaedm.com/producto/preventa-una-historia-del-movimiento-piquetero/"
      >
        Comprar
      </a>
    </>
  );
};
