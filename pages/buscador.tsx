import { useQuery } from "@apollo/client";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GET_COMUNICADOS_BUSCADOR } from "../services/queries/buscadorComunicados";
import MainContainer from "../components/Containers/MainContainer/MainContainer";
import {Footer} from "../components/ui/Footer/Footer";
import {TarjetaComunicados} from "../components/Tarjetas/TarjetaComunicados/TarjetaComunicados"

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
    campos_comunicados: {
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
      <title>🔎 Buscador de notas</title>
    </Head>
    <MainContainer>
      <h2>Buscador de comunicados</h2>
      <form onSubmit={handleClickSearch}>
      <div>
            <input
              id="inputSearch"
              placeholder="Escribí aquí tu búsqueda. Usá comillas ' ' para coincidencia exacta de varias palabras."
              type="string"
              name="textSearch"
              defaultValue={textoBusquedaUrl || textInputSearch}
            />
            <button
            onClick={handleClickSearch}
            >
            BUSCAR
            </button>
          </div>
          <div>
            <div>
              <p>Si los resultados son demasiado amplios, probá refinar tu búsqueda con estas opciones</p>
            </div>
          </div>
      </form>
      {   <>
      <div>
          <div>
                <p>Resultados: {data?.comunicados.pageInfo.offsetPagination.total}</p>
          </div>
          <article>
                {data?.comunicados.edges.map(({ node }: SearchProps) => (
                  <TarjetaComunicados
                    titulo={node.title}
                    slug={node.slug}
                    date={node.date}
                    imagen={
                      node.featuredImage.node.sourceUrl
                    }
                    volanta={node.campos_comunicados.volanta}
                  />
                ))}
              
              </article>
                 </div> 
                 </>
                }
    </MainContainer>
    <Footer />
    </>
  )
};