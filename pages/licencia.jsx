import Head from "next/head";
import React from "react";
import MainContainer from "../components/Containers/MainContainer/MainContainer";

const licencia = () => {
    return (
        <>
        <Head>
        <title>Polo Obrero - Licencia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <div>
            <p className="licencia">Condiciones de copia y distribución
                Polo Obrero ha decidido acogerse a la licencia Creative Commons con Atribución, versión 4.0 Internacional.
                Esto significa que puede:
                <br />
                Copiar, distribuir y comunicar públicamente nuestra obra.
                <br />
                Hacer obras derivadas. (to Remix)
                <br />
                Hacer un uso comercial de esta obra. 
                <br />
                Usted debe darle crédito a esta obra de manera adecuada, en la forma en que indica debajo y proporcionando un enlace a la licencia, e indicando en forma clara si se han realizado cambios. Puede hacerlo en cualquier forma razonable, pero no de forma tal que sugiera que usted o su uso tienen el apoyo de nuestra parte.. Dentro de las distintas fórmulas de licencia Creative Commons la escogida por Polo Obrero implica:
                <br />
                1.- Reconocimiento (Attribution): Debes reconocer y citarnos como autores y, en el caso de que seas una página web, enlazar a la URL original.
            </p>
<p className="licencia">1.a-El reconocimiento debe hacerse de la siguiente manera: Todo contenido tomado de Polo Obrero debe ser debidamente acreditado. En todos los casos debe consignarse Polo Obrero y al autor, si estuviera disponible, del contenido tomado. Si no estuviese disponible el autor basta con consignar a Polo Obrero. Si usted hace modificaciones sobre los contenidos originales estos deben constar claramente, asimismo debe compilar las modificaciones previas y sus respectivas aclaraciones. Estas modificaciones no pueden sugerir, de ninguna manera, que Polo Obrero aprueba el resultado de esa reutilización.

Ejemplo: Si usted quisiera usar el texto de esta nota debe atribuirlo con alguna variante similar a: “por Eduardo Belliboni en Polo Obrero" y un enlace al URL original. Si usted quisiera usar la fotografía que ilustra la nota debe atribuirla a: Polo Obrero/Nombre Apellido y un enlace al URL original.</p>
<p className="licencia">
Estas condiciones tienen las siguientes excepciones:
1.- Esta licencia no se aplica a los contenidos en cualquier formato y soporte (textos, gráficos, informaciones, imágenes, etc) publicados por Polo Obrero procedentes de terceros que vayan firmados o sean atribuidos a agencias de información u otros medios de comunicación, a fotógrafos o a cualquier otra empresa u organización diferente de Polo Obrero. Estas excepciones tendrán sus propias condiciones de copia y distribución que nada tienen que ver con las de Polo Obrero y, por tanto, antes de realizar cualquier acción con dichos contenidos se debe comprobar sus condiciones de uso.

2- Polo Obrero tiene numerosos colaboradores en todo el país, que envían sus artículos desde diversos barrios, lugares de trabajo y de estudio que envían sus aportes en forma voluntaria. Si por error u omisión alguna imagen de alguna nota no tiene el crédito correspondiente o infringe algún derecho de autor, por favor hacenos saber con un mail a desarrollowebPO@gmail.com, indicando URL del artículo y origen de la foto para poder colocar el crédito correspondiente o eliminar la imagen en caso de que no tengamos tu autorización para utilizarla.

La licencia legal, a las que deberás añadir las “condiciones” y los casos excepcionales 1 y 2 están disponibles:

Para más información, puede consultar el resumen de la licencia o su texto completo.
</p>
</div>
      </MainContainer>

      <style  jsx>{`
        .licencia {
            color: #FCFCFC;
        }
        `}</style>
        </>
    )
}


export default licencia;