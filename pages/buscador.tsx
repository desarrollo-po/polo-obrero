import { useQuery } from "@apollo/client";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GET_COMUNICADOS_BUSCADOR } from "../services/queries/buscadorComunicados";
import MainContainer from "../components/Containers/MainContainer/MainContainer";
import {Footer} from "../components/ui/Footer/Footer";
import {TarjetaComunicados} from "../components/Tarjetas/TarjetaComunicados/TarjetaComunicados"
import LupaSearch from "../components/Iconos/LupaSearch";

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
      <h2 className="titulo">Buscador de comunicados</h2>
      
      <div className="containerInput">
       <form  className="formulario" onSubmit={handleClickSearch}>
        <input
              className="input"
              id="inputSearch"
              placeholder="Escribí aquí tu búsqueda. Usá comillas ' ' para coincidencia exacta de varias palabras."
              type="string"
              name="textSearch"
              defaultValue={textoBusquedaUrl || textInputSearch}
            />
            <button className="btnBuscar"
            onClick={handleClickSearch}
            >
            <LupaSearch width="25" height="25" />
            </button>
        </form>
      </div>
      {   <>
      <div>
          <div>
                <p className="texto">Resultados: {data?.comunicados.pageInfo.offsetPagination.total}</p>
          </div>
          <article className="containerResultados">
                {data?.comunicados.edges.map(({ node }: SearchProps) => (
                  <TarjetaComunicados
                    titulo={node.title}
                    slug={node.slug}
                    date={node.date}
                    imagen={
                      node.featuredImage? node.featuredImage.node.sourceUrl : null}
                    volanta={node.camposComunicados.volanta}
                  />
                ))}
              
              </article>
                 </div> 
                 </>
                }
    </MainContainer>
    <Footer />
    <style jsx>{`
      .containerResultados {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap:15px;
        margin: 20px 0 ;
      }

      .formulario {
        display: flex;
        width:100%;
      }

      .input {
        border-radius: 0;
          border-bottom: 1px solid #ccc;
          padding: 5px 0 5px 2px;
          font-size: 1rem;
          font-weight: 300;
          color: #000;
          width: 60%;
          margin: 0 10px 0 0;
      }

      .titulo {
        color: #FFF;
      }
      .texto {
        color:#FFF;
      }

      .btnBuscar {
        background: none;
        border:none;
        cursor:pointer;
      }

      {/* @include media(max-width: 480px) {
    .containterResultados{
      display: block;
      article {margin-bottom: 10px}
    } */}
  }
    `}</style>
    </>
  )
};