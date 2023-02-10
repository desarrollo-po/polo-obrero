import { useQuery } from "@apollo/client";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GET_COMUNICADOS_BUSCADOR } from "../services/queries/buscadorComunicados";
import MainContainer from "../components/Containers/MainContainer/MainContainer";
import {Footer} from "../components/ui/Footer/Footer";
import {TarjetaComunicados} from "../components/Tarjetas/TarjetaComunicados/TarjetaComunicados"
import LupaSearch from "../components/Iconos/LupaSearch";
import styles from "../styles/Buscador.module.scss";

interface SearchProps {
  value: string;
  node: {
    id: number;
    title: string;
    slug: string;
    date: string;
    featuredImage: {
      node: {
        sourceUrl: string;
      };
    };
    camposComunicados: {
      volanta: string;
    };
}
};

export default function buscador({}) {
  const router = useRouter();
  const textoBusquedaUrl = router.query.q as string;
  const [textInputSearch, settextInputSearch] = useState("");
  const [showResults, setShowResult] = useState(false)
  const { data, loading, error } = useQuery(GET_COMUNICADOS_BUSCADOR, {
    variables: {
      textoSearch: textInputSearch,
    },
  });

  const handleClickSearch = (
    event: React.FormEvent<HTMLFormElement> | React.FormEvent<HTMLButtonElement>
  ) => {
  event.preventDefault();
    const inputValue = (
      document.querySelector("#inputSearch") as HTMLInputElement
    ).value;
    settextInputSearch(inputValue);
    setShowResult(true);
  }

  useEffect(() => {
    if (textoBusquedaUrl) {
      settextInputSearch(textoBusquedaUrl);
    }
  }, [textoBusquedaUrl]);

  return (
    <>
    <Head>
      <title>🔎 Buscador</title>
    </Head>
    <MainContainer>
      <div className={styles.containerTitulo}>
      <h2 className={styles.titulo}>Buscador de comunicados</h2>
      </div>
      <div className={styles.containerInput}>
       <form  className={styles.formulario} onSubmit={handleClickSearch}>
        <input
              className={styles.input}
              id="inputSearch"
              placeholder="Escribí aquí tu búsqueda. Usá comillas ' ' para coincidencia exacta de varias palabras."
              type="string"
              name="textSearch"
              defaultValue={textoBusquedaUrl || textInputSearch}
            />
            <button className={styles.btnBuscar}
            onClick={handleClickSearch}
            >
            <LupaSearch color="white" width="25" height="25" />
            </button>
        </form>
      </div>
      {   <>
      <div>
          <article className={styles.containerResultados}>
          {showResults && data?.comunicados.edges.map(({ node }: SearchProps) => (
          <>
                  <TarjetaComunicados
                    titulo={node.title}
                    slug={node.slug}
                    date={node.date}
                    imagen={
                      node.featuredImage? node.featuredImage.node.sourceUrl : null}
                    volanta={node.camposComunicados.volanta}
                  />
               </> ))}
              </article>
              <p className={styles.textoFinal}>Si no encontraste lo que estabas buscando probá ingresar a nuestras notas <a className={styles.link} href="https://prensaobrera.com/seccion/movimiento-piquetero">ACÁ</a></p>
                 </div> 
                 </>
                }
    </MainContainer>
    <Footer />
    </>
  )
};