import React from "react";
import Box from "@mui/material/Box";
import { getVideosByPlayList } from "../services/queries/GetVideosByPlayList";
import { ListaYouTubeJudies } from "../components/ui/ListaYouTube/ListaYouTube-judies";
import Head from "next/head";

export default function Medios({ listaYouTubeJudies }) {
  return (
    <>
    <Head>        
      <meta name="robots" content="noindex, nofollow" />
    </Head>
      <main>
        <Box
          sx={{
            width: "100%",
            typography: "body1",
            padding: "10px",
            height: "auto",
          }}
        >
          <ListaYouTubeJudies listaYouTubeJudies={listaYouTubeJudies} />{" "}
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
    4
  );
  return {
    props: {
      listaYouTubeJudies,
    },
  };
}
