import { Box, Container, createTheme, CssBaseline, Stack, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Add from "./components/Add";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import RightSidebar from "./components/RightSidebar";
import Sidebar from "./components/Sidebar";

export default function App() {

  const [mode,setMode] = useState('light')

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box>
        <Navbar/>
        <Stack spacing={2} direction='row' justifyContent='space-between'>
          <Sidebar setMode={setMode}/>
          <Feed/>
          <RightSidebar/>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}
