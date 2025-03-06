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

      <style jsx global>{`
        header {
          display: none !important;
        }
        main {
          background-color: white;
        }
        html,
        body {
          background-color: white !important;
        }
        .css-69z67c-MuiTabs-scroller {
          left: auto;
          display: flex;
          justify-content: center;
        }

        @media only screen and (max-width: 700px) {
          header {
            display: none !important;
          }
          main {
            background-color: white !important;
            width: 100%;
          }
          .ListaYouTube-po_listaYouTube__nKWDq {
            margin: auto !important;
          }
          html,
          body {
            background-color: white !important;
          }
        }
      `}</style>
    </>
  );
}

export async function getServerSideProps() {
  const listaYouTubeJudies = await getVideosByPlayList(
    "PLOkpVI5EeEoKyLAMSQJdykOClsSnA-Spz",
    3
  );
  return {
    props: {
      listaYouTubeJudies,
    },
  };
}
