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
        .MuiButton-root {
          margin-bottom: 20px;
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
        .MuiTabs-flexContainer.css-k008qs {
          align-items: center;
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
          .MuiButton-root {
            margin-bottom: 20px;
            left: 1%;
          }
          .ListaYouTube-po_listaYouTube__nKWDq {
            margin: auto !important;
          }
          .MuiTabs-flexContainer.MuiTabs-centered.css-1wf8b0h-MuiTabs-flexContainer {
            justify-content: center;
            gap: 0px;
          }
          html,
          body {
            background-color: white !important;
          }
          .css-13xfq8m-MuiTabPanel-root {
          }
          .MuiTabs-flexContainer.css-k008qs {
            width: max-content;
          }
        }
      `}</style>
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
