import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { ListaYouTube } from "../components/ui/ListaYouTube/ListaYouTube";
import { getVideosByPlayList } from "../services/queries/GetVideosByPlayList";
import { Button } from "@mui/material";

export default function Medios({ listaYouTubeJudies }) {
  return (
    <>
      <main>
        <Box
          sx={{
            width: "100%",
            typography: "body1",
            padding: "10px",
            height: "auto",
          }}
        >
          <ListaYouTube listaYouTube={listaYouTubeJudies} />{" "}
        </Box>
      </main>

    </>
  );
}

export async function getServerSideProps() {
  const listaYouTubeJudies = await getVideosByPlayList(
    "PLOkpVI5EeEoISMAqiOP0z9oXGId118qTY",
    3
  );
  return {
    props: {
      listaYouTubeJudies,
    },
  };
}
