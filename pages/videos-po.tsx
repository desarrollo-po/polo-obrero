import React from 'react'
import MainContainer from '../components/Containers/MainContainer/MainContainer'
import styles from "../styles/Medios.module.scss"
import { ListaYouTube } from "../components/ui/ListaYouTube/ListaYouTube";
import { getVideosByPlayList } from "../services/queries/GetVideosByPlayList";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function Medios({
  listaYouTube,listaYouTube1,listaYouTube2,
}) {
  console.log( listaYouTube, listaYouTube1, listaYouTube2);

  const [value, setValue] = React.useState('1');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <>

  <main>
    
    <div className="container">
      <Box sx={{ width: 'auto', typography: 'body1', padding: '10px', height: 'auto', }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
            <TabList onChange={handleChange} centered aria-label="lab API tabs example">
              <Tab label="📺 El PO en los medios" value="1" />
              <Tab label="📰 Prensa Obrera" value="2" />
              <Tab label="🏛️ Congreso Nacional" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1"> <ListaYouTube listaYouTube={listaYouTube} /> </TabPanel>
          <TabPanel value="2"> <ListaYouTube listaYouTube={listaYouTube1} /> </TabPanel>
          <TabPanel value="3"> <ListaYouTube listaYouTube={listaYouTube2} /> </TabPanel>
        </TabContext>
      </Box>
    </div>

  
  </main>

      <style jsx global>{`
        header {
          display: none !important;
        }
        main {
          background-color: white;
        }
        .container {
          width: 51%;
          height: 51%;
          margin-left: 24%;
          
        }



      `}</style>
    </>
  );
}

export async function getServerSideProps() {
  const listaYouTube = await getVideosByPlayList(
    "PLcZulwVPWcU3AZHnk-0ihy5blYLJ1YyuY",
    3
  );
  const listaYouTube1 = await getVideosByPlayList(
    "PLcZulwVPWcU3-C1Yc8YNx1I-NAxEaDafO",
    3
  );
  const listaYouTube2 = await getVideosByPlayList(
    "PLcZulwVPWcU2K9TOT8Qt-lgrDjU8EQMSP",
    3
  );
  return {
    props: {
      listaYouTube,
      listaYouTube1,
      listaYouTube2,
    },
  };
}
