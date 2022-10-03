import React from "react";

export const ListaYouTube = ({ listaYouTube }) => {
  return (
    <>
      <ul>
        {listaYouTube.items.map((item) => {
          return (
            <li key={item.id}>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </li>
          );
        })}
      </ul>
    </>
  );
};
