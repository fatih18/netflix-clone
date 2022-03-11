import "./App.css";
import { Banner } from "./app/core/Banner";
import { Navbar } from "./app/core/Navbar";
import { Row } from "./app/core/Row";
import requests from "./services";

function App() {
  return (
    <div className='app'>
      <Navbar />

      <Banner />

      <Row
        title='NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />

      <Row isLargeRow title='Trending now' fetchUrl={requests.fetchTrending} />

      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />

      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />

      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />

      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />

      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />

      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;

// import logo from "./logo.svg";

// import {
//   Grid,
//   Box,
//   Typography,
//   Container,
//   Drawer,
//   Divider,
//   Paper
// } from "@mui/material";
// import { AppBarComponent } from "../src/app/components/AppBar";
// import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

// const boxStyle = { width: 220, height: 320 };

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   textAlign: "center",
//   color: theme.palette.text.secondary,
//   height: 60,
//   lineHeight: "60px"
// }));

// function App() {
//   return (
//     <>
//       <Container
//         sx={{ backgroundColor: "rgb(115, 134, 150)", maxHeight: "100%" }}
//         maxWidth='xl'
//       >
//         {/* app bar*/}
//         <AppBarComponent />

//         <Grid sx={{ disableGutters: 4 }}>
//           <Box sx={{ marginTop: 4 }} />
//           <Grid sm={12} xs={12} item container spacing={3}>
//             <Grid item>
//               <Box
//                 sx={{
//                   width: boxStyle.width,
//                   height: boxStyle.height,
//                   display: "flex",
//                   backgroundColor: "red",
//                   borderRadius: 4
//                 }}
//               >
//                 <Item> ADANA MERKEZ</Item>
//               </Box>
//             </Grid>
//             <Grid item>
//               <Box
//                 sx={{
//                   width: boxStyle.width,
//                   height: boxStyle.height,
//                   display: "flex",
//                   backgroundColor: "yellow",
//                   borderRadius: 4
//                 }}
//               ></Box>
//             </Grid>
//             <Grid item>
//               <Box
//                 sx={{
//                   width: boxStyle.width,
//                   height: boxStyle.height,
//                   display: "flex",
//                   borderRadius: 4,
//                   backgroundColor: "blue"
//                 }}
//               ></Box>
//             </Grid>
//             <Grid item>
//               <Box
//                 sx={{
//                   width: boxStyle.width,
//                   height: boxStyle.height,
//                   display: "flex",
//                   backgroundColor: "red",
//                   borderRadius: 4
//                 }}
//               ></Box>
//             </Grid>
//             <Grid item>
//               <Box
//                 sx={{
//                   width: boxStyle.width,
//                   height: boxStyle.height,
//                   display: "flex",
//                   backgroundColor: "yellow",
//                   borderRadius: 4
//                 }}
//               ></Box>
//             </Grid>
//             <Grid item>
//               <Box
//                 sx={{
//                   width: boxStyle.width,
//                   height: boxStyle.height,
//                   display: "flex",
//                   borderRadius: 4,
//                   backgroundColor: "blue"
//                 }}
//               ></Box>
//             </Grid>
//           </Grid>
//           <Box sx={{ bottom: 100, height: 500 }}></Box>

//           {/* Footer */}
//           <Box
//             component='footer'
//             sx={{
//               height: 200,
//               width: "100%",
//               display: "flex",
//               alignItems: "center",
//               backgroundColor: "skyblue",
//               borderBottom: 4
//             }}
//           ></Box>
//         </Grid>
//       </Container>
//     </>
//   );
// }

// export default App;
